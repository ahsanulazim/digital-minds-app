import { Link } from "react-router";
import security from "../assets/svg/Security.svg"
const Login = () => {
    return (
        <>
            <div className="max-w-[1050px] mx-auto flex justify-between px-4 py-10 items-center flex-col md:flex-row">
                <div>
                    <img className="w-150 hidden md:block" src={security} alt="user-login-illustration" />
                </div>
                <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    <h1 className="text-xl text-center font-bold">Welcome Back</h1>
                    <div className="divider text-sm">Login with your Email</div>
                    <label className="fieldset-label font-bold">Email</label>
                    <input type="email" className="input" placeholder="example@email.com" />

                    <label className="fieldset-label font-bold">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <a className="link text-main">Forgot Password?</a>

                    <button className="btn bg-main text-white mt-4">Login</button>
                    <div>
                        Don't have an account? <Link to="/register" className="link text-main">Register Now</Link></div>
                </fieldset>
            </div>
        </>
    );
};

export default Login;