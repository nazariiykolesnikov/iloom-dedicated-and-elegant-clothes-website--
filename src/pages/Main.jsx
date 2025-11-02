import BestsellersSlider from "../components/BestsellersSlider.jsx";
import Banner from "../components/Banner.jsx";
import NewProducts from "../components/NewProducts.jsx";
import OrderGiftWrapping from "../components/OrderGiftWrapping.jsx";
import ILoomStyleInstagram from "../components/ILoomStyleInstagram.jsx";
import Subscribing from "../components/Subscribing.jsx";

const Main = () => {
    return (
        <div>
            <Banner />
            <BestsellersSlider />
            <NewProducts />
            <OrderGiftWrapping />
            <ILoomStyleInstagram />
            <Subscribing />
        </div>
    );
}

export default Main;
