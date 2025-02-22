import { FaStar } from "react-icons/fa6";


const Card = ({ image, title, badge }) => {
    return (
        <>
            <div className="card bg-base-100 max-[400px]:w-full w-44 sm:w-60 shadow-sm">
                <figure className="relative">
                    <img className="h-40 w-full object-cover"
                        src={image}
                        alt={title} draggable={false} />
                    <span className="badge absolute bottom-2 right-2 badge-soft border-0 rounded-full"><FaStar className="text-amber-400" />4.9</span>
                </figure>
                <div className="card-body p-4">
                    <span className="badge badge-xs badge-warning">{badge}</span>
                    <h2 className="card-title text-sm">{title}</h2>
                    <div className="card-actions">
                        <button className="btn btn-sm text-white bg-main border-main w-full">Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;