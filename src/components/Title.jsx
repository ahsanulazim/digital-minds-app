const Title = ({ title, badge, description }) => {
    return (
        <>
            <h6 className="text-sm text-center font-bold bg-main/15 text-main w-max mx-auto px-3 py-2 rounded-full mb-2">{badge}</h6>
            <h1 className="text-3xl text-center font-bold">{title}</h1>
            <p className="pb-8 text-center max-w-xl mx-auto text-zinc-500">
                {description}
            </p>
        </>
    );
};

export default Title;