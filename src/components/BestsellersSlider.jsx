import React, { useRef } from "react";
import { assets } from "../assets/data/assets.js";
import oversize_hoodie_with_love_embroidery_01 from '../assets/images/products/Oversize hoodie with love embroidery/oversize_hoodie_with_love_embroidery_01.png';
import skinny_oversized_beige_department_01 from "../assets/images/products/Skinny oversized beige Department/skinny_oversized_beige_department_01.png";
import oversize_skinny_with_carp_koi_embroidery_01 from "../assets/images/products/Oversize skinny with Carp Koi embroidery/oversize_skinny_with_carp_koi_embroidery_01.png";
import oversized_tshirt_with_just_kiss_me_print_01 from "../assets/images/products/Oversized T-shirt with Just Kiss Me print/oversized_tshirt_with_just_kiss_me_print_01.png";
import tshirt_with_print_need_money_for_porsche_01 from "../assets/images/products/T-shirt with print Need Money For Porsche/tshirt_with_print_need_money_for_porsche_01.png";

const products = [
  {
    id: 1,
    title: 'Худи оверсайз с вышивкой "Любовь"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 4852,
    rating: 5,
    reviews: 1,
    highlighted: true,
    image: oversize_hoodie_with_love_embroidery_01,
  },
  {
    id: 2,
    title: 'Худи оверсайз бежевый "Department"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 3859,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: skinny_oversized_beige_department_01,
  },
  {
    id: 3,
    title: 'Худи оверсайз с вышивкой "Карпы...',
    priceWithotWBWalletAndWithoutDiscount: 14880,
    pricetWithWBWalletWithDiscount: 11904,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversize_skinny_with_carp_koi_embroidery_01,
  },
  {
    id: 4,
    title: 'Футболка оверсайз с принтом "Just..."',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2689,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversized_tshirt_with_just_kiss_me_print_01,
  },
  {
    id: 5,
    title: 'Футболка с принтом "Need Money..."',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2824,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: tshirt_with_print_need_money_for_porsche_01,
  },
  {
    id: 6,
    title: 'Худи оверсайз с вышивкой "Любовь"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 4852,
    rating: 5,
    reviews: 1,
    highlighted: true,
    image: oversize_hoodie_with_love_embroidery_01,
  },
  {
    id: 7,
    title: 'Худи оверсайз бежевый "Department"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 3859,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: skinny_oversized_beige_department_01,
  },
  {
    id: 8,
    title: 'Худи оверсайз с вышивкой "Карпы...',
    priceWithotWBWalletAndWithoutDiscount: 14880,
    pricetWithWBWalletWithDiscount: 11904,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversize_skinny_with_carp_koi_embroidery_01,
  },
  {
    id: 9,
    title: 'Футболка оверсайз с принтом "Just..',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2689,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversized_tshirt_with_just_kiss_me_print_01,
  },
  {
    id: 10,
    title: 'Футболка с принтом "Need Money ...',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2824,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: tshirt_with_print_need_money_for_porsche_01,
  },
  {
    id: 11,
    title: 'Худи оверсайз с вышивкой "Любовь"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 4852,
    rating: 5,
    reviews: 1,
    highlighted: true,
    image: oversize_hoodie_with_love_embroidery_01,
  },
  {
    id: 12,
    title: 'Худи оверсайз бежевый "Department"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 3859,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: skinny_oversized_beige_department_01,
  },
  {
    id: 13,
    title: 'Худи оверсайз с вышивкой "Карпы...',
    priceWithotWBWalletAndWithoutDiscount: 14880,
    pricetWithWBWalletWithDiscount: 11904,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversize_skinny_with_carp_koi_embroidery_01,
  },
  {
    id: 14,
    title: 'Футболка оверсайз с принтом "Just..."',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2689,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversized_tshirt_with_just_kiss_me_print_01,
  },
  {
    id: 15,
    title: 'Футболка с принтом "Need Money..."',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2824,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: tshirt_with_print_need_money_for_porsche_01,
  },
  {
    id: 16,
    title: 'Худи оверсайз с вышивкой "Любовь"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 4852,
    rating: 5,
    reviews: 1,
    highlighted: true,
    image: oversize_hoodie_with_love_embroidery_01,
  },
  {
    id: 17,
    title: 'Худи оверсайз бежевый "Department"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    pricetWithWBWalletWithDiscount: 3859,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: skinny_oversized_beige_department_01,
  },
  {
    id: 18,
    title: 'Худи оверсайз с вышивкой "Карпы...',
    priceWithotWBWalletAndWithoutDiscount: 14880,
    pricetWithWBWalletWithDiscount: 11904,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversize_skinny_with_carp_koi_embroidery_01,
  },
  {
    id: 19,
    title: 'Футболка оверсайз с принтом "Just..',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2689,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversized_tshirt_with_just_kiss_me_print_01,
  },
  {
    id: 20,
    title: 'Футболка с принтом "Need Money ...',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    pricetWithWBWalletWithDiscount: 2824,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: tshirt_with_print_need_money_for_porsche_01,
  },
];

const BestsellersSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="section-bestsellers">
      <section className="relative z-0 py-16 px-6 bg-white mt-[-300px]">
        <h2 className="text-[32px] ml-[7px] text-left font-bold text-[#212429] mb-8 montserrat">
          Хиты продаж
        </h2>
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
        <div className="overflow-x-auto scrollbar-hide" ref={sliderRef}>
          <div className="flex gap-6 w-max ml-[7px] mt-[20px] scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative min-w-[280px] bg-white rounded-[20px] shadow-md p-4 mr-[20px] scrollbar-hide ${
                  product.highlighted ? "border-[#b58aff]" : "border-transparent"
                }`}
              >
                <img
                  src={assets.empty_heart}
                  alt="Favorite"
                  className="absolute top-[15px] right-[15px] w-[32px] h-[32px] cursor-pointer"
                />
                <img
                  src={product.image}
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
                <button className="relative border-none cursor-pointer bg-[#FC8BD1] text-[#ffffff] hover:bg-[#FDC5E8] leading-[0] w-[280px] font-[500] text-[16px] montserrat h-[56px] mt-[10px] rounded-[30px] w-full py-2 rounded-[12px] text-[14px] font-semibold transition">
                  <img
                    src={assets.shopping_cart}
                    alt="Shopping Cart"
                    className="absolute left-[22px] bottom-[17.75px]"
                  />
                  Добавить в корзину
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestsellersSlider;