import { useRef, useState } from "react";
import { assets } from "../../../assets/data/assets.js";
import {
    products_mini_hoodies_part1,
    products_mini_t_shirts_part_1,
    products_mini_sweatshirts_part1
} from "../../../assets/data/product-mini.js";
import "./NewProducts.css";

const NewProducts = () => {
    const [favorites, setFavorites] = useState([]);
    const [activeTab, setActiveTab] = useState("hoodie");
    const sliderRef = useRef(null);

    const toggleFavorite = (productId) => {
        setFavorites((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const tabs = [
        { id: "hoodie", label: "Худи" },
        { id: "t-shirt", label: "Футболки" },
        { id: "sweatshirt", label: "Свитшоты" },
    ];

    return (
        <div className="section-bestsellers mt-[70px]">
            <section className="relative z-0 py-16 px-6 bg-white lg:mt-[-300px]">
                <h2 className="newproducts-section__heading text-[32px] text-left font-[700] text-[#212429] montserrat">
                    Новинки
                </h2>
                <div className="mt-[60px] px-[40px] w-[100%]">
                    <div className="news_product__tabs flex gap-[24px] text-[18px] font-[400] text-[#555]">
                        {tabs.map(({ id, label }) => (
                            <button
                                type="button"
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`text-[16px] w-[100px] border-none pl-[2px] cursor-pointer bg-transparent montserrat pb-[4px] transition-all ${
                                    activeTab === id
                                        ? "news_product__tabs-active text-[#000000] pl-[-30px]"
                                        : "text-[#757575]"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    {/* Контент вкладки */}
                    <div className="news_product__tabs-content">
                        {activeTab === "hoodie" && (
                            <div className="ml-[-55px]">
                                {/* Перший слайдер */}
                                <div className="news_product__tabs-slider overflow-x-auto scrollbar-hide" ref={sliderRef}>
                                    <div className="flex gap-6 w-max ml-[4px] mt-[20px]">
                                        {products_mini_hoodies_part1.map((product) => {
                                            const isFavorite = favorites.includes(product.id);
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    isFavorite={isFavorite}
                                                    toggleFavorite={toggleFavorite}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* Другий слайдер */}
                                <div className="overflow-x-auto scrollbar-hide" ref={sliderRef}>
                                    <div className="flex gap-6 w-max ml-[7px] mt-[20px]">
                                        {products_mini_hoodies_part1.map((product) => {
                                            const isFavorite = favorites.includes(product.id);
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    isFavorite={isFavorite}
                                                    toggleFavorite={toggleFavorite}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "t-shirt" && (
                            <div className="ml-[-35px]">
                                {/* Перший слайдер */}
                                <div className="overflow-x-auto scrollbar-hide mt-[-15px]" ref={sliderRef}>
                                    <div className="flex gap-6 w-max mt-[20px]">
                                        {products_mini_t_shirts_part_1.map((product) => {
                                            const isFavorite = favorites.includes(product.id);
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    isFavorite={isFavorite}
                                                    toggleFavorite={toggleFavorite}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Другий слайдер */}
                                <div className="overflow-x-auto scrollbar-hide mt-[40px]" ref={sliderRef}>
                                    <div className="flex gap-6 w-max mt-[20px]">
                                        {products_mini_t_shirts_part_1.map((product) => {
                                            const isFavorite = favorites.includes(product.id);
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    isFavorite={isFavorite}
                                                    toggleFavorite={toggleFavorite}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "sweatshirt" && (
                            <div className="ml-[-35px]">
                                {/* Перший слайдер */}
                                <div className="overflow-x-auto scrollbar-hide mt-[-15px]" ref={sliderRef}>
                                    <div className="flex gap-6 w-max mt-[20px]">
                                        {products_mini_sweatshirts_part1.map((product) => {
                                            const isFavorite = favorites.includes(product.id);
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    isFavorite={isFavorite}
                                                    toggleFavorite={toggleFavorite}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Другий слайдер */}
                                <div className="overflow-x-auto scrollbar-hide mt-[40px]" ref={sliderRef}>
                                    <div className="flex gap-6 w-max mt-[20px]">
                                        {products_mini_sweatshirts_part1.map((product) => {
                                            const isFavorite = favorites.includes(product.id);
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    isFavorite={isFavorite}
                                                    toggleFavorite={toggleFavorite}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Компонент картки товару
const ProductCard = ({product, isFavorite, toggleFavorite}) => (
    <div
        className={`relative min-w-[280px] bg-white rounded-[20px] shadow-md p-4 mr-[45px] ${
            product.highlighted ? "border-[#b58aff]" : "border-transparent"
        }`}
    >
        <img
            src={isFavorite ? assets.filled_heart : assets.heart_with_border}
            alt="Favorite"
            onClick={() => toggleFavorite(product.id)}
            className="z-1 absolute top-[20px] right-[19px] w-[24px] h-[24px] cursor-pointer transition hover:opacity-50"
        />
        <img
            src={assets.white_circle}
            alt="White circle"
            className="z-0 absolute top-[15px] right-[15px] w-[32px] h-[32px] cursor-pointer transition"
        />
        <img
            src={product.image}
            alt={product.title}
            className="w-[280px] h-[400px] object-cover rounded-[12px] mb-4"
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
            <span className="text-[#9D9DA5]"> · {product.reviews} оцінка</span>
        </div>
        <button className="relative border-none cursor-pointer bg-[#FC8BD1] montserrat font-[500] hover:bg-[#FDC5E8] w-full text-[#ffffff] text-[14px] h-[56px] mt-[10px] rounded-[12px] transition">
            <img
                src={assets.shopping_cart}
                alt="Shopping Cart"
                className="absolute left-[22px] bottom-[17.75px]"
            />
            Добавить в корзину
        </button>
    </div>
);

export default NewProducts;