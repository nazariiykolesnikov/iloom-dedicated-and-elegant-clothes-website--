import React, { useRef, useState } from "react";
import { assets } from "../assets/data/assets.js";
import { products } from "../assets/data/product.js";

const BestsellersSlider = () => {
  const [favorites, setFavorites] = useState([]);
  const sliderRef = useRef(null);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="section-bestsellers">
      <section className="relative z-0 py-16 px-6 bg-white lg:mt-[-300px]">
        <h2 className="text-[32px] ml-[7px] text-left font-bold text-[#212429] mb-8 montserrat">
          Хиты продаж
        </h2>

        {/* Стрілки */}
        <button
          aria-label="Scroll left"
          className="slider-arrow-left absolute z-10 w-[64px] h-[64px] top-[273px] left-[-43px] rounded-full bg-[#FDC5E8] cursor-pointer hover:bg-[#343535] border-none"
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
          className="slider-arrow-right absolute z-10 w-[64px] h-[64px] top-[273px] right-[-41px] rounded-full bg-[#FDC5E8] border-none cursor-pointer hover:bg-[#343535]"
          onClick={scrollRight}
        >
          <img
            src={assets.arrow_down}
            alt="→"
            className="w-[64px] h-[64px] rotate-[-90deg] ml-[-5px]"
          />
        </button>

        {/* Слайдер */}
        <div className="overflow-x-auto scrollbar-hide" ref={sliderRef}>
          <div className="flex gap-6 w-max ml-[7px] mt-[20px]">
            {products.map((product) => {
              const isFavorite = favorites.includes(product.id);
              return (
                <div
                  key={product.id}
                  className={`relative min-w-[280px] bg-white rounded-[20px] shadow-md p-4 mr-[20px] ${
                    product.highlighted ? "border-[#b58aff]" : "border-transparent"
                  }`}
                >
                  <img
                    src={isFavorite ? assets.filled_heart : assets.empty_heart}
                    alt="Favorite"
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-[15px] right-[15px] w-[32px] h-[32px] cursor-pointer transition hover:opacity-50"
                  />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[280px] h-[400px] object-cover rounded-[12px] mb-4"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-[20px] font-bold montserrat font-[600] ${
                        product.priceWithotWBWalletAndWithoutDiscount
                          ? "text-[#EA4335]"
                          : "text-[#737373]"
                      }`}
                    >
                      {product.pricetWithWBWalletWithDiscount.toLocaleString()} ₽
                    </span>
                    {product.priceWithotWBWalletAndWithoutDiscount && (
                      <span className="ml-[15px] text-[16px] line-through montserrat font-medium text-[#737373]">
                        {product.priceWithotWBWalletAndWithoutDiscount.toLocaleString()} ₽
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
                  <button className="relative border-none cursor-pointer bg-[#FC8BD1] text-white hover:bg-[#FDC5E8] w-full font-semibold text-[14px] montserrat h-[56px] mt-[10px] rounded-[12px] transition">
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