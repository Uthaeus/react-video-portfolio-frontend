import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import CommentForm from "../comments/comment-form";
import CommentItem from "../comments/comment-item";

function ProjectDetail() {
    const [project, setProject] = useState({});
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const userCtx = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/projects/${id}`)
        .then((response) => {
            if (response.ok) {
            return response.json();
            }
        })
        .then((data) => {
            setProject(data);
            setComments(data.comments);
        })
        .catch((error) => console.log("project error:", error));
    }, [id]);

    function commentSubmitHandler(comment) {
        setComments((prevComments) => [...prevComments, comment]);
    }

    return (
        <div className="project-detail-container">
            <h1>{project.title}</h1>

            <div className="project-detail-comments">
                <h2>Comments</h2>
                {userCtx.user && <CommentForm user_id={userCtx.user.id} project_id={project.id} commentSubmitHandler={commentSubmitHandler} />}
                {comments.map((comment) => <CommentItem key={comment.id} comment={comment}d />)}
            </div>

            <div className="project-detail-actions">
                {userCtx.user?.role === "site_admin" && (
                    <>
                        <Link to={`/projects/${id}/edit`}>Edit</Link>
                        <Link to={`/projects/${id}/delete`}>Delete</Link>
                    </>
                )}

                <Link to="/projects">Back to Projects</Link>
            </div>
        </div>
    );
}

export default ProjectDetail;
