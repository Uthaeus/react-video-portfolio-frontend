import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    function onSubmit(data) {
        console.log(data);

        if (data.password !== data.password_confirmation) {
            console.log('Passwords do not match');
            return;
        }

        let dataToSend = {
            user: {
                email: data.email,  
                username: data.username,
                password: data.password,
                password_confirmation: data.password_confirmation
            }
        };

        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                localStorage.setItem('video-token', token);
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log('sign up error:', error));
    }

    return (
        <div className="sign-up-container">
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" {...register("username", { required: true })} />
                    {errors?.username && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register("password", { required: true })} />
                    {errors?.password && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type="password" className="form-control" {...register("password_confirmation", { required: true })} />
                    {errors?.password_confirmation && <span>This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;