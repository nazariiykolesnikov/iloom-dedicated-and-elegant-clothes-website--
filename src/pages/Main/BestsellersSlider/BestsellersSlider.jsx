import { useRef, useState } from "react";
import { assets } from "../../../assets/data/assets.js";
import { products } from "../../../assets/data/products.js";
import {
  increment,
  decrement
} from "../../../action/CounterAction.js";
import "./BestsellersSlider.css";

const BestsellersSlider = ({ dispatch }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
      <div className="bestsellers-section">
        <section className="bestsellers-section__wrapper relative z-0 py-16 px-6 bg-white">
          <h2 className="bestsellers-section__heading text-[32px] text-left font-bold text-[#212429] mb-8 montserrat">
            Хиты продаж
          </h2>
          <button
              aria-label="Scroll left"
              className="slider-arrow-left absolute z-10 w-[64px] h-[64px] top-[273px] left-[-43px] rounded-full bg-[#FC8BD1] cursor-pointer hover:bg-[#FDC5E8] border-none"
              onClick={scrollLeft}
          >
            <img
                src={assets.arrow_down}
                alt="←"
                className="w-[64px] h-[64px] rotate-[90deg] ml-[-5px]"
            />
          </button>
          <button
              aria-label="Scroll right"
              className="slider-arrow-right absolute z-10 w-[64px] h-[64px] top-[273px] right-[-41px] rounded-full bg-[#FC8BD1] border-none cursor-pointer hover:bg-[#FDC5E8]"
              onClick={scrollRight}
          >
            <img
                src={assets.arrow_down}
                alt="→"
                className="w-[64px] h-[64px] rotate-[-90deg] ml-[-5px]"
            />
          </button>
          <div className="bestsellers__slider overflow-x-auto scrollbar-hide" ref={sliderRef}>
            <div className="flex gap-6 w-max ml-[7px] mt-[20px]">
              {products.map((product) => {
                const [isFavorite, setIsFavorite] = useState(false);

                const handleFavoriteClick = () => {
                  if (isFavorite) {
                    dispatch(decrement());
                  } else {
                    dispatch(increment());
                  }
                  setIsFavorite(!isFavorite);
                };

                return (
                    <div
                        key={product.id}
                        className={`relative min-w-[280px] bg-white rounded-[20px] shadow-md p-4 mr-[45px] ${
                            product.highlighted ? "border-[#FC8BD1]" : "border-transparent"
                        }`}
                    >
                      <img
                          src={isFavorite ? assets.filled_heart : assets.heart_with_border}
                          alt="Favorite"
                          onClick={handleFavoriteClick}
                          className="z-1 absolute top-[20px] right-[19px] w-[24px] h-[24px] cursor-pointer transition hover:opacity-50"
                      />
                      <img
                          src={assets.white_circle}
                          alt="White cirle"
                          className="z-0 absolute top-[15px] right-[15px] w-[32px] h-[32px] cursor-pointer transition"
                      />
                      <img
                          src={product.image}
                          alt={product.title}
                          className="bestsellers-section__image object-cover rounded-[12px] mb-4"
                      />
                      <div className="flex items-center gap-2 mb-2">
                    <span
                        className={`text-[20px] montserrat font-[600] ${
                            product.priceWithoutWBWalletAndWithoutDiscount
                                ? "text-[#EA4335]"
                                : "text-[#737373]"
                        }`}
                    >
                      {product.priceWithWBWalletWithDiscount.toLocaleString()} ₽
                    </span>
                        {product.priceWithoutWBWalletAndWithoutDiscount && (
                            <span className="ml-[15px] text-[16px] line-through montserrat font-medium text-[#737373]">
                        {product.priceWithoutWBWalletAndWithoutDiscount.toLocaleString()} ₽
                      </span>
                        )}
                      </div>
                      <p className="text-[14px] text-left font-normal montserrat text-[#212429] mb-1">
                        {product.title}
                      </p>
                      <div className="relative text-[16px] text-left montserrat text-[#212429] mb-2">
                        <img
                            src={assets.star}
                            alt="Rating"
                            className="absolute left-0 top-0 w-[15px] h-[15px] mr-1"
                        />
                        <span className="ml-[20px] font-medium text-[#000000]">
                      {product.rating}
                    </span>
                        <span className="text-[#9D9DA5]"> · {product.reviews} оценка</span>
                      </div>
                      <button
                          className="relative border-none cursor-pointer bg-[#FC8BD1]  montserrat font-[500] hover:bg-[#FDC5E8] w-full text-[#ffffff] text-[14px] montserrat h-[56px] mt-[10px] rounded-[12px] transition">
                        <img
                            src={assets.shopping_cart}
                            alt="Shopping Cart"
                            className="absolute left-[22px] bottom-[17.75px]"
                        />
                        Добавить в корзину
                      </button>
                    </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
  );
};

export default BestsellersSlider;