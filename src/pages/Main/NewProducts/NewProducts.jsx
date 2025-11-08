import {
    useRef,
    useState
} from "react";
import {
    products_mini_hoodies_part1,
    products_mini_hoodies_part2,
    products_mini_t_shirts_part_1,
    products_mini_sweatshirts_part1
} from "../../../assets/data/product-mini.js";
import "./NewProducts.css";
import { assets } from "../../../assets/data/assets.js";

const NewProducts = () => {
    const [activeTab, setActiveTab] = useState("hoodie");
    const sliderRef = useRef(null);

    const renderProducts = (products) => (
        <div 
            className="product-card__container overflow-x-auto scrollbar-hide" 
            ref={sliderRef}
        >
            <div 
                className="flex gap-[10px] w-max mt-[20px]"
            >
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                    />
                ))}
            </div>
        </div>
    );

    const tabs = [
        { id: "hoodie", label: "Худи" },
        { id: "t-shirt", label: "Футболки" },
        { id: "sweatshirt", label: "Свитшоты" },
    ];

    return (
        <div className="
            newproducts-section__container mt-[70px]
        ">
            <section className="
                newproducts-section__wrapper relative z-0 py-16 px-6 bg-white
            ">
                <h2 className="
                    newproducts-section__heading text-[32px] font-[700] text-[#212429] montserrat
                ">
                    Новинки
                </h2>
                <div className="
                    news_product__tabs--container mt-[60px] px-[40px] w-full
                ">
                    <div className="
                        news_product__tabs flex gap-[24px] text-[18px] font-[400] text-[#555]
                    ">
                        {tabs.map(({id, label}) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`
                                    news_product__tabs--button text-[16px] w-[100px] border-none bg-transparent 
                                    montserrat transition-all cursor-pointer
                                        ${ activeTab === id 
                                        ? "news_product__tabs-active text-[#000000]" 
                                        : "text-[#757575]"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="news_product__tabs-content ml-[15px] mt-[50px]">
                        {activeTab === "hoodie" && renderProducts(products_mini_hoodies_part1)}
                        {activeTab === "t-shirt" && renderProducts(products_mini_t_shirts_part_1)}
                        {activeTab === "sweatshirt" && renderProducts(products_mini_sweatshirts_part1)}
                    </div>
                    <div className="news_product__tabs-content ml-[15px]">
                        {activeTab === "hoodie" && renderProducts(products_mini_hoodies_part2)}
                        {activeTab === "t-shirt" && renderProducts(products_mini_t_shirts_part_1)}
                        {activeTab === "sweatshirt" && renderProducts(products_mini_sweatshirts_part1)}
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProductCard = ({product}) => {
    if (!product) {
        return null;
    }

    const {
        image,
        title = "Без назви",
        priceWithoutWBWalletAndWithoutDiscount,
        rating = "—",
        reviews = 0,
        highlighted = false
    } = product;

    const formattedPrice = priceWithoutWBWalletAndWithoutDiscount?.toLocaleString() ?? "N/A";

    return (
        <div
            className={`
                product-card__container relative min-w-[280px] bg-white rounded-[20px] 
                shadow-md p-4 mr-[15px] ml-[5px]
                    ${ highlighted 
                    ? "border-[#b58aff]" 
                    : "border-transparent"
            }`}
        >
            <img
                src={assets.filled_heart}
                alt="Favorite"
                className="
                    product-card__filled_heart-icon z-1 absolute top-[20px] right-[19px] 
                    w-[24px] h-[24px] cursor-pointer transition hover:opacity-50
            "/>
            <img
                src={assets.white_circle}
                alt="White circle"
                className="
                    product-card__white_heart-icon z-0 absolute top-[15px] 
                    right-[15px] w-[32px] h-[32px] cursor-pointer transition
            "/>
            <img
                src={image ?? assets.placeholder}
                alt={title}
                className="
                    product-card__image w-[290px] h-[405px] object-cover 
                    rounded-[12px] mb-4 ml-[-5px] mt-[10px]
                "
            />
            <div className="
                product-card__content flex items-center gap-2 mb-2
            ">
                <span className={`
                    "product-card__new-price text-[20px] montserrat font-[600] mt-[7px]
                        ${ priceWithoutWBWalletAndWithoutDiscount 
                        ? "text-[#EA4335]" 
                        : "text-[#737373]"}`
                }>
                    {formattedPrice} ₽
                </span>
                {priceWithoutWBWalletAndWithoutDiscount 
                    && (
                        <span className="
                            product-card__old-price ml-[15px] text-[16px] mt-[7px] line-through montserrat 
                            font-medium text-[#737373]
                        ">
                            {formattedPrice} ₽
                        </span>
                    )
                }
            </div>
            <p className="
                product-card__product-name text-[14px] text-left font-normal montserrat 
                text-[#212429] mb-1 w-[290px] h-[38px]
            ">
                {title}
            </p>
            <div className="
                relative text-[16px] text-left montserrat text-[#212429] mb-2
            ">
                <img
                    src={assets.star}
                    alt="Rating"
                    className="
                        product-card__rating-icon absolute left-0 top-0 w-[15px] h-[15px] mr-1
                    "
                />
                <span className="
                    product-card__product-rating ml-[20px] font-medium text-[#000000]
                ">
                    {rating}&nbsp;
                </span>
                <span className="
                    product-card__product-mark text-[#9D9DA5]
                ">
                 · {reviews} оценка
                </span>
            </div>
            <button className="
                product-card__add-to-card-button relative border-none cursor-pointer bg-[#FC8BD1] 
                montserrat font-[500] hover:bg-[#FDC5E8] w-full text-[#ffffff] text-[14px] h-[56px] 
                mt-[10px] rounded-[12px] transition
            ">
                <img
                    src={assets.shopping_cart}
                    alt="Shopping Cart"
                    className="
                        product-card__shopping-card-icon absolute left-[22px] bottom-[17.75px]
                "/>
                Добавить в корзину
            </button>
        </div>
    );
};

export default NewProducts;