import Email from "./Email";
import Title from "./Title";


const Subscribe = () => {
    return (
        <div className="bg-black px-2 py-10">
            <div className={`max-w-[1050px] mx-auto px-2 py-10 bg-white bg-[url('/envelope.png')] rounded-3xl shadow-md`}>
                <Title title="Our Expert Teachers" badge="Newsletter" description="Problems trying to resolve the conflict between
the two major realms of Classical physics: Newtonian mechanics" />
                <div className="mx-auto w-max">
                    <Email />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;