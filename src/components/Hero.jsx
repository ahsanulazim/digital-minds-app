import { Link } from "react-router";
import girl from "../assets/Images/girl.png";


const Hero = () => {
    return (
        <>
            <div>
                <div className="hero-content mx-auto max-w-[1050px] 2xl:max-w-[1440px] px-2 pb-0 xl:justify-between flex-col-reverse lg:flex-row-reverse pt-10 lg:pt-0">
                    <img
                        src={girl}
                        className="" alt="girl" draggable={false} />
                    <div>
                        <h6 className="text-sm xl:text-lg mx-auto mb-2 lg:m-0 text-center lg:text-left font-bold bg-main/15 text-main w-max px-3 py-2 rounded-full">Online</h6>
                        <h1 className="text-3xl sm:text-5xl 2xl:text-6xl text-center lg:text-left font-bold leading-10 sm:leading-15 2xl:leading-20 2xl:max-w-lg">HIGH QUALITY COURSES</h1>
                        <p className="py-3 sm:py-6 max-w-xs mx-auto sm:mx-0 sm:max-w-none text-center sm:text-lg lg:text-left 2xl:text-xl 2xl:max-w-md">
                            Every day brings with it a fresh set of learning possibilities.
                        </p>
                        <div className="mx-auto lg:mx-0 w-max">
                            <Link to="/register"><button className="btn xl:btn-lg bg-main border-0 text-white mr-3">Join Us Now</button></Link>
                            <button className="btn xl:btn-lg btn-outline text-main border-main">Know More</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;