import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function SignIn() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    function onSubmit(data) {
        console.log(data);

        let dataToSend = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users/sign_in', {
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
            userCtx.login(data.status.data);
            navigate('/');
        })
        .catch(error => console.log('sign in error:', error));
    }

    return (
        <div className="sign-in-container">
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register("password", { required: true })} />
                    {errors?.password && <span>This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;