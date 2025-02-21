import { Link } from "react-router";
import privacy from "../assets/svg/Privacy.svg"

const Registration = () => {
    return (
        <>
            <div className="max-w-[1050px] mx-auto flex justify-between px-4 py-10 items-center flex-col md:flex-row">
                <div>
                    <img className="w-150 hidden md:block" src={privacy} alt="user-registration-illustration" />
                </div>
                <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    <h1 className="text-xl text-center font-bold">Let's Join Us</h1>
                    <div className="divider text-sm">Register with your Email</div>
                    <label className="fieldset-label font-bold">Name</label>
                    <input type="text" className="input" placeholder="Your Name" />
                    <label className="fieldset-label font-bold">Email</label>
                    <input type="email" className="input" placeholder="example@email.com" />

                    <label className="fieldset-label font-bold">Password</label>
                    <input type="password" className="input" placeholder="Type Password" />
                    <label className="fieldset-label font-bold">Confirm Password</label>
                    <input type="password" className="input" placeholder="Re-type Password" />

                    <button className="btn bg-main text-white mt-4">Register</button>
                    <div>
                        Have an account? <Link to="/login" className="link text-main">Login Now</Link></div>
                </fieldset>
            </div>
        </>
    );
};

export default Registration;