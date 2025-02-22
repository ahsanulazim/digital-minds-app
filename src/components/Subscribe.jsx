import { HiOutlineMail } from "react-icons/hi";
import Title from "./Title";


const Subscribe = () => {
    return (
        <div className="bg-black px-4 md:px-2 py-10">
            <div className={`max-w-[1050px] mx-auto px-4 py-10 bg-white bg-[url('/envelope.png')] rounded-3xl shadow-md`}>
                <Title title="Our Expert Teachers" badge="Newsletter" description="Problems trying to resolve the conflict between
the two major realms of Classical physics: Newtonian mechanics" />
                <form className="flex justify-center">
                    <div className="max-w-xl w-full flex items-center border border-e-0 rounded-tl-sm rounded-bl-sm border-zinc-400 bg-white">
                        <HiOutlineMail className="text-zinc-400 text-lg mx-2" />
                        <input type="email" name="Email" className="w-full border-0 outline-0 text-sm" placeholder="mail@site.com" required />
                    </div>
                    <input type="submit" className="btn bg-main text-white rounded-tl-none rounded-bl-none border-0" value="Subscribe" />
                </form>
            </div>
        </div>
    );
};

export default Subscribe;