
const Stat = ({ ratio, title }) => {
    return (
        <div className="stats bg-main text-white shadow px-8 grow">
            <div className="stat">
                <div className="stat-value text-center text-amber-400">{ratio}</div>
                <div className="stat-title text-lg text-white font-bold text-center">{title}</div>
            </div>
        </div>
    );
};

export default Stat;