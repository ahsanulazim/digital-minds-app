import AllStat from "./allStat";
import Hero from "./Hero";
import Popular from "./Popular";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className=" bg-base-200">
            <Hero />
            <Popular />
            <AllStat />
            <Testimonials />
            <Subscribe />
        </div>
    );
};

export default Home;