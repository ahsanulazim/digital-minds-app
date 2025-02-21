import Card from "./Card";
import Title from "./Title";
import web from "../assets/Images/web-development.jpg";
import graphic from "../assets/Images/graphic-design.jpg";
import digital from "../assets/Images/Digital-Marketing.jpeg";
import video from "../assets/Images/video-editing.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Popular = () => {
    return (
        <div className="max-w-[1050px] mx-auto px-2 py-20">
            <Title title="Our Popular Courses" badge="Practice Advise" description="Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics" />
            <div className="flex flex-wrap justify-center md:justify-between gap-6 mb-10">
                <Card image={web} title={"Web Development with MERN"} badge="75365 Students" />
                <Card image={graphic} title={"Graphic Design with Illustrator, Photoshop"} badge="56094 Students" />
                <Card image={digital} title={"Digital Marketing, Marketing Tools & SEO"} badge="20987 Students" />
                <Card image={video} title={"Video Editing Beginner to Advanced"} badge="36244 Students" />
            </div>
            <div className="flex justify-center">
                <button className="btn bg-main text-white font-bold">Browse More Courses <IoIosArrowForward /></button>
            </div>
        </div>
    );
};

export default Popular;