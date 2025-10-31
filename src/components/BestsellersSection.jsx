
// import React from "react";
import { assets } from "../assets/data/assets.js";
import oversize_hoodie_with_love_embroidery_01 from '../assets/images/products/Oversize hoodie with love embroidery/oversize_hoodie_with_love_embroidery_01.png';
// import oversize_hoodie_with_love_embroidery_02 from '../assets/images/products/Oversize hoodie with love embroidery/oversize_hoodie_with_love_embroidery_02.png';
import skinny_oversized_beige_department_01 from "../assets/images/products/Skinny oversized beige Department/skinny_oversized_beige_department_01.png";
// import skinny_oversized_beige_department_02 from "../assets/images/products/Skinny oversized beige Department/skinny_oversized_beige_department_02.png";
import oversize_skinny_with_carp_koi_embroidery_01 from "../assets/images/products/Oversize skinny with Carp Koi embroidery/oversize_skinny_with_carp_koi_embroidery_01.png";
// import oversize_skinny_with_carp_koi_embroidery_02 from "../assets/images/products/Oversize skinny with Carp Koi embroidery/oversize_skinny_with_carp_koi_embroidery_02.png";
import oversized_tshirt_with_just_kiss_me_print_01 from "../assets/images/products/Oversized T-shirt with Just Kiss Me print/oversized_tshirt_with_just_kiss_me_print_01.png";
// import oversized_tshirt_with_just_kiss_me_print_02 from "../assets/images/products/Oversized T-shirt with Just Kiss Me print/oversized_tshirt_with_just_kiss_me_print_02.png";
import tshirt_with_print_need_money_for_porsche_01 from "../assets/images/products/T-shirt with print Need Money For Porsche/tshirt_with_print_need_money_for_porsche_01.png";
// import tshirt_with_print_need_money_for_porsche_02 from "../assets/images/products/T-shirt with print Need Money For Porsche/tshirt_with_print_need_money_for_porsche_02.png";

const products = [
  {
    id: 1,
    title: 'Худи оверсайз с вышивкой "Любовь"',
    priceWithotWBWalletAndWithoutDiscount: 9000,
    priceWithotWBWalletWithDiscount: 4952,
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
    priceWithotWBWalletWithDiscount: 3938,
    pricetWithWBWalletWithDiscount: 3859,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: skinny_oversized_beige_department_01,
  },
  {
    id: 3,
    title: 'Худи оверсайз с вышивкой "Карпы Кои"',
    priceWithotWBWalletAndWithoutDiscount: 25000,
    priceWithotWBWalletWithDiscount: 12147,
    pricetWithWBWalletWithDiscount: 11904,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversize_skinny_with_carp_koi_embroidery_01,
  },
  {
    id: 4,
    title: 'Футболка оверсайз с принтом "Just Kiss Me"',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    priceWithotWBWalletWithDiscount: 2744,
    pricetWithWBWalletWithDiscount: 2689,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: oversized_tshirt_with_just_kiss_me_print_01,
  },
  {
    id: 5,
    title: 'Футболка с принтом "Need Money For Porsche"',
    priceWithotWBWalletAndWithoutDiscount: 5000,
    priceWithotWBWalletWithDiscount: 2882,
    pricetWithWBWalletWithDiscount: 2824,
    rating: 5,
    reviews: 1,
    highlighted: false,
    image: tshirt_with_print_need_money_for_porsche_01,
  },
];

const BestsellersSection = () => {
  return (
    <div className="section-bestsellers">
      <section className="relative z-0 py-16 px-6 bg-white">
        <h2 className="text-[32px] ml-[7px] mt-[-310px] text-left font-bold text-[#212429] mb-8 montserrat">
          Хиты продаж
        </h2>
                      <button
                  className="absolute z-2 w-[64px] h-[64px] top-[273px] left-[-41px] bg:text-[#gf4fs5] rounded-[50%] bg-[#FDC5E8] border-none"
                >
                  <img
                    src={assets.arrow_down}
                    alt="Shopping Cart"
                    className="absolute top-[0px] left-[0px] w-[64px] h-[64px] rotate-[90deg]"
                  />
            </button>
            <button
                  className="absolute z-2 w-[64px] h-[64px] top-[273px] right-[-41px] bg:text-[#gf4fs5] rounded-[50%] bg-[#FDC5E8] border-none"
                > 
                  <img
                    src={assets.arrow_down}
                    alt="Shopping Cart"
                    className="absolute top-[0px] left-[0px] w-[64px] h-[64px] rotate-[-90deg]"
                  />
            </button>
        <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 min-w-[1200px] ml-[7px] mt-[20px]">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative mr-[45px] border-none min-w-[270px] bg-white rounded-[20px] shadow-md p-4 relative border-2 ${
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
                  alt={product.title}
                  className="w-full h-[400px] w-[280px] object-cover rounded-[12px] mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`mt-[5px] text-[20px] font-[700] leading-[1.5] tracking-[0] montserrat ${
                      product.priceWithotWBWalletAndWithoutDiscount ? "text-[#EA4335]" : "text-[#737373]"
                    }`}
                  >
                    {product.pricetWithWBWalletWithDiscount.toLocaleString()} ₸
                  </span>
                  {product.priceWithotWBWalletAndWithoutDiscount && (
                    <span className="ml-[15px] mt-[4.5px] text-[16px] line-through montserrat font-[500] text-[#737373]">
                      {product.priceWithotWBWalletAndWithoutDiscount.toLocaleString()} ₸
                    </span>
                  )}
                </div>
                <p className="mt-[5px] text-[14px] w-[100%] text-left font-[400] leading-[1.5] montserrat regular text-[#212429] mb-1 font-montserrat">
                  {product.title}
                </p>
                <div className="relative mt-[-7px] text-[16px] text-left montserrat text-[#212429] mb-2">
                  <img
                    src={assets.star}
                    alt="Rating"
                    className="absolute text-[15px] left-[0] top-[0] w-[15px] h-[15px] cursor-pointer mr-1"
                  />
                  <span className="ml-[20px] font-[500] text-[#000000]">{product.rating}</span><span className="text-[#9D9DA5]"> · {product.reviews} оценка</span>
                </div>
                <button
                  className="relative border-none cursor-pointer bg-[#FC8BD1] text-[#ffffff] hover:bg-[#FDC5E8] leading-[0] w-[280px] font-[500] text-[16px] montserrat h-[56px] mt-[10px] rounded-[30px] w-full py-2 rounded-[12px] text-[14px] font-semibold transition"
                >
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

export default BestsellersSection;
