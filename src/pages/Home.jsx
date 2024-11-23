import Banner from "../components/Home/Banner/Banner";
import Footer from "../components/Home/Footer/Footer";
import Services from "../components/Home/Services/Services";
import Navbar from "../components/shared/Navbar";


const Home = () => {
    return (
        <div className="font-roboto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default Home;