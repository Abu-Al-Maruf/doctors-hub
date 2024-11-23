import Banner from "../components/Home/Banner/Banner";
import Footer from "../components/Home/Footer/Footer";
import Navbar from "../components/shared/Navbar";


const Home = () => {
    return (
        <div className="font-roboto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>

        </div>
    );
};

export default Home;