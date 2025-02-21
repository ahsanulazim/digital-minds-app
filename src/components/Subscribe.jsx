import { HiOutlineMail } from "react-icons/hi";
import Title from "./Title";


const Subscribe = () => {
    return (
        <div className="bg-black px-4 md:px-2 py-10">
            <div className={`max-w-[1050px] mx-auto px-4 py-10 bg-white bg-[url('/envelope.png')] rounded-3xl shadow-md`}>
                <Title title="Our Expert Teachers" badge="Newsletter" description="Problems trying to resolve the conflict between
the two major realms of Classical physics: Newtonian mechanics" />
                <form className="flex justify-center items-center">
                    <div className="max-w-xl w-full flex items-center border border-e-0 py-1.5 rounded-tl-sm rounded-bl-sm border-zinc-400 bg-white">
                        <HiOutlineMail className="text-zinc-400 text-xl mx-1" />
                        <input type="email" name="Email" className="w-full border-0 outline-0" placeholder="mail@site.com" required />
                    </div>
                    <button className="btn bg-main text-white rounded-tl-none rounded-bl-none">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;