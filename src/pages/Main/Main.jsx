import React from "react";
import BestsellersSlider from "./BestsellersSlider/BestsellersSlider.jsx";
import Banner from "./Banner/Banner.jsx";
import NewProducts from "./NewProducts/NewProducts.jsx";
import OrderGiftWrapping from "./OrderGiftWrapping/OrderGiftWrapping.jsx";
import ILoomStyleInstagram from "./ILoomStyleInstagram/ILoomStyleInstagram.jsx";
import Subscribing from "./Subscribing/Subscribing.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {
    useDispatch,
    useSelector
} from "react-redux";

const Main = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    return (
        <div>
            <Navbar count={count} />
            <Banner />
            <BestsellersSlider dispatch={dispatch} />
            <NewProducts dispatch={dispatch} />
            <OrderGiftWrapping />
            <ILoomStyleInstagram />
            <Subscribing />
            <Footer />
        </div>
    );
};

export default Main;
