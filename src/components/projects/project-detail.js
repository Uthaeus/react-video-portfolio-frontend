import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import CommentForm from "../comments/comment-form";
import CommentItem from "../comments/comment-item";
import { ProjectStatusToggle } from "../util/project-status";

function ProjectDetail() {
  const [project, setProject] = useState({});
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(true);
  const [showComments, setShowComments] = useState(true);
  const [status, setStatus] = useState("draft");
  const { id } = useParams();
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setProject(data);
        setStatus(data.status);
        setComments(data.comments);
      })
      .catch((error) => console.log("project error:", error));
  }, [id]);

  function deleteHandler() {
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("video-token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          navigate("/projects");
          return response.json();
        }
      })
      .then((data) => {
        console.log("project deleted:", data);
      })
      .catch((error) => console.log("project delete error:", error));
  }

  function commentSubmitHandler(comment) {
    setComments((prevComments) => [...prevComments, comment]);
  }

  function toggleStatusHandler() {
    ProjectStatusToggle({ id: project.id, currentStatus: project.status });
    setStatus((prevStatus) => (prevStatus === "draft" ? "published" : "draft"));
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        <div className="project-detail-content-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <h4 className="project-detail-subtitle">{project.subtitle}</h4>
        </div>

        <p onClick={toggleStatusHandler}>{status}</p>

        <div className="project-detail-video-wrapper">
          <video className="project-detail-video" width="95%" controls>
            <source src={project.video_url} type="video/mp4" />
          </video>
        </div>

        <div className="project-detail-actions">
          {userCtx.user?.role === "site_admin" && (
            <>
              <Link
                className="project-detail-link edit"
                to={`/projects/${id}/edit`}
              >
                Edit
              </Link>
              <Link
                className="project-detail-link delete"
                onClick={deleteHandler}
              >
                Delete
              </Link>
            </>
          )}

          <Link className="project-detail-link back" to="/">
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="project-detail-right-column">
        <div className="project-detail-body-wrapper">
          <p className="project-detail-body">{project.body}</p>
        </div>

        <div className="project-detail-comments">
            <div className="project-detail-comments-header">
                <button className="toggle-comments-btn" onClick={() => setShowComments(prev => !prev)}>{showComments ? 'v' : '^'}</button>

                <div className="comment-and-title">
                    <p className="show-comment-form-link" onClick={() => setShowCommentForm(prev => !prev)}>{showCommentForm ? 'hide form' : 'show form'}</p>
                    <h2 className="project-detail-comments-title">Comments</h2>
                </div>
            </div>

          {userCtx.user && showCommentForm && (
            <CommentForm
              user_id={userCtx.user.id}
              project_id={project.id}
              commentSubmitHandler={commentSubmitHandler}
            />
          )}
          {showComments && comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              user={userCtx.user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
