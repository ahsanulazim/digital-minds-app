import Stat from "./Stat";


const AllStat = () => {
    return (
        <div className="mx-auto max-w-[1050px] flex gap-8 justify-between p-2 flex-wrap mb-20">
            <Stat title="CLASSES" ratio="15K+" />
            <Stat title="MEMBERS" ratio="100K" />
            <Stat title="TEACHERS" ratio="4K+" />
            <Stat title="RATINGS" ratio="4.8 out of 5" />
        </div>
    );
};

export default AllStat;