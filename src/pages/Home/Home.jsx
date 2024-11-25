import Banner from "../../components/Home/Banner/Banner";
import Doctors from "../../components/Home/Doctors/Doctors";
import Services from "../../components/Home/Services/Services";
import Explore from "../../components/Home/Explore/Explore";
import Review from "../../components/Home/Review/Review";


const Home = () => {
    return (
        <div className="font-roboto">

            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Explore></Explore>
            {/* <Review></Review> */}


        </div>
    );
};

export default Home;