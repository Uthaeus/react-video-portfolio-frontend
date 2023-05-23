import { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function ProjectForm({project, formSubmitHandler}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [method, setMethod] = useState("POST");
    const [url, setUrl] = useState("http://localhost:4000/projects");
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (project) {
            reset(project);
            setMethod("PATCH");
            setUrl(`http://localhost:4000/projects/${project.id}`);
        }
    }, [project, reset]);

    function buildForm(data) {
        const formData = new FormData();

        formData.append("project[user_id]", user.id);
        formData.append("project[title]", data.title);
        formData.append("project[subtitle]", data.subtitle);
        formData.append("project[video_url]", data.video_url);
        if (data.image[0]) {
            formData.append("project[image]", data.image[0]);
        }
        formData.append("project[body]", data.body);

        return formData;
    }

    function onSubmit(data) {
        console.log("data", data);
        const formData = buildForm(data);

        fetch(url, {
            method: method,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("video-token")}`
            },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                if (method === 'POST') {
                    formSubmitHandler();
                } else {
                    navigate(`/projects/${project.id}`);
                }
                return response.json();
            }
        })
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