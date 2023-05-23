import { useForm } from "react-hook-form";

function SignUp() {
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        console.log(data);
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