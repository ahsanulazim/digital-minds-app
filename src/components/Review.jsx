import { FaQuoteRight } from "react-icons/fa6";


const Review = ({ review, reviewer, course, className }) => {


    return (
        <div className={className}>
            <div className="card-body p-4">
                <p className="text-justify">{review}</p>
                <hr className="border-zinc-200 my-3" />
                <div className="list flex-row items-center justify-between">
                    <div className="list-row p-0 items-center static">
                        <div className="avatar avatar-placeholder"><div className="bg-main text-neutral-content w-8 rounded-full">
                            <span className="text-xl">{reviewer.slice(0, 1)}</span>
                        </div></div>
                        <div>
                            <div className="font-bold">{reviewer}</div>
                            <div className="text-[10px] uppercase font-semibold opacity-60">{course}</div>
                        </div>
                    </div>
                    <div className="badge badge-soft badge-warning"><FaQuoteRight /></div>
                </div>
            </div>
        </div>
    );
};

export default Review;