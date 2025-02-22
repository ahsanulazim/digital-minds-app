import { Link } from "react-router";
import girl from "../assets/Images/girl.png";


const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content max-w-[1050px] px-2 pb-0 flex-col-reverse lg:flex-row-reverse pt-10 lg:pt-0">
                    <img
                        src={girl}
                        className="xl:-mr-25" alt="boy" />
                    <div>
                        <h6 className="text-sm mx-auto mb-2 lg:m-0 text-center lg:text-left font-bold bg-main/15 text-main w-max px-3 py-2 rounded-full">Online</h6>
                        <h1 className="text-3xl sm:text-5xl text-center lg:text-left font-bold leading-10 sm:leading-15">HIGH QUALITY COURSES</h1>
                        <p className="py-6 text-center lg:text-left">
                            Every day brings with it a fresh set of learning possibilities.
                        </p>
                        <div className="mx-auto lg:mx-0 w-max">
                            <Link to="/register"><button className="btn bg-main border-0 text-white mr-3">Join Us Now</button></Link>
                            <button className="btn btn-outline text-main border-main">Know More</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;