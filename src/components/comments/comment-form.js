import { useForm } from "react-hook-form";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function CommentForm({ user_id, project_id, comment_id, commentSubmitHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(UserContext);

    function submitHandler(data) {
        console.log(data);

        let dataToSend = {
            comment: {
                content: data.content,
                user_id: user.id,
            }
        };
        if (project_id) {
            dataToSend.comment.project_id = project_id;
        }
        if (comment_id) {
            dataToSend.comment.comment_id = comment_id;
        }
        
        fetch("http://localhost:4000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("video-token")}`
            },
            body: JSON.stringify(dataToSend)
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            commentSubmitHandler(data);
            reset();
        })
        .catch((error) => console.log("comment post error:", error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" {...register("content", { required: true })} />
                {errors?.content && <span>This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default CommentForm;