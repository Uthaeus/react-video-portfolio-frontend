import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";

import { UserContext } from "../../store/user-context";

function ProjectForm({project}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const userCtx = useContext(UserContext);

    useEffect(() => {
        if (project) {
            reset(project);
        }
    }, [project, reset]);

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <div className="project-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type='text' className="form-control" {...register("title", { required: true })} />
                    {errors?.title && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="subtitle">Subtitle</label>
                    <input type='text' className="form-control" {...register("subtitle")} />
                </div>

                <div className="form-group">
                    <label htmlFor="video_url">Video URL</label>
                    <input type='text' className="form-control" {...register("video_url")} />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type='file' className="form-control" {...register("image")} />
                </div>

                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" {...register("body")} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ProjectForm;