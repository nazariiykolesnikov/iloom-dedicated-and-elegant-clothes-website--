import { useState } from "react";
import { assets } from "../../../assets/data/assets.js";

const LocationDetector = () => {
    const [locationText, setLocationText] = useState("Detect your current location");
    const [isDisabled, setIsDisabled] = useState(false);
    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const apiKey = "0912a423ad8144b8a23c6686e8f5d769";

    const handleLocationClick = () => {
        if (!navigator.geolocation) {
            setLocationText("Your browser doesn't support geolocation");
            setIsDisabled(true);
            return;
        }

        setLocationText("Allow to detect your current location");
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    const onSuccess = async (position) => {
        setLocationText("Detecting your current location....");
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });

        try {
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
            );
            const result = await response.json();
            const components = result.results[0].components;

            const detectCurrentCity =
                components.city
                || components.town
                || components.village
                || components.hamlet
                || city
                || "";
            const detectCurrentCountry =
                components.country 
                || country 
                || "";

            setCity(detectCurrentCity);
            setCountry(detectCurrentCountry);

            const displayFullAddress = `${detectCurrentCity}, ${detectCurrentCountry}`;
            setLocationText(displayFullAddress);            
        } catch (error) {
            setLocationText("Something went wrong");
            console.error("Fetch error:", error);
        }
    };

    const onError = (error) => {
        console.log("Error of getting the current location:" + error);

        if (error.code === 1) {
            setLocationText("You have denied the request");
        } else if (error.code === 2) {
            setLocationText("Location aren't available");
        } else {
            setLocationText("Something went wrong");
        }

        setIsDisabled(true);
    };

    return (
        <div className="search-location__section flex gap-[24px] ml-[-40px] mt-[-58px] items-center location-search">
            <button 
                className="
                    search-location__button text-left mt-[58px] text-[11px] w-[279px] h-[44px] 
                    bg-[#FC8BD1] rounded-[12px] px-[16px] py-[14px] gap-[10px] 
                    text-[#FFFFFF] transition-all hover:opacity-80 border-none cursor-pointer"
                onClick={handleLocationClick} 
                disabled={isDisabled}
            >
                <div className="flex items-center gap-[8px]">
                    <img
                        src={assets.location}
                        alt="Location"
                        className="
                            w-[20px] h-[20px] object-contain"
                    />
                    <div 
                        className="flex flex-col leading-[16px] font-medium"
                    >
                        <span 
                             className="red-hat-display text-[11px]"
                        >
                            Доставить в
                        </span>
                        <span 
                            className="montserrat text-[12px] font-[600] text-[#ffffff]
                        ">
                            {locationText}
                        </span>
                    </div>
                </div>
                <img
                    src={assets.arrow_down}
                    alt="Dropdown arrow"
                    className="w-[16px] h-[16px] object-contain"
                />
            </button>
        </div>
    );
} 

export default LocationDetector;