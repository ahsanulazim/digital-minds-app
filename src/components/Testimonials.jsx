import { useEffect, useState } from "react";
import Review from "./Review";
import Title from "./Title";

const Testimonials = () => {

    const [allReview, setAllReview] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}review.json`)
            .then(response => response.json())
            .then(data => setAllReview(data)
            )
            .catch((error) => {
                console.error('Error fetching JSON:', error);
            });
    }, [])


    return (
        <div className="max-w-[1050px] mx-auto pb-20">
            <Title badge="Testimonials" title="Feedback's From Our Student" description="Learn about the students whom are holding jobs after completing our course, know what they have to say about us" />

            {allReview?.reviews?.length > 0 ? <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 px-2">{(
                allReview.reviews.map((r) => (
                    <Review key={r.id} review={r.review} reviewer={r.reviewer} course={r.course} className={`card bg-base-100 border-zinc-200 border-1 ${r.id === 2 || r.id === 6 ? "md:col-span-2" : ""} ${r.id === 5 ? "md:row-span-2 md:row-start-2 md:col-start-3" : ""}
                    
                    `} />
                ))
            )} </div> : (
                <div className="flex justify-center"><span className="loading loading-ring loading-lg"></span></div>
            )}
        </div>
    );
};

export default Testimonials;