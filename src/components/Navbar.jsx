import React, { useState } from "react";
import { assets } from "../assets/data/assets.js";
import { NavLink } from "react-router-dom";

const Navbar = () => { /* */
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(false);
    const menuItems = [
        {
            path: "/clothes-for-woman",
            label: "Женщинам",
            submenu: [
                { path: "/clothes-for-woman/view-all", label: "Смотреть все" },
                { path: "/clothes-for-woman/new-products", label: "Новинки" },
                { path: "/clothes-for-woman/bestsellers", label: "Хиты продаж" },
                { path: "/clothes-for-woman/clothes", label: "Одежда" },
                { path: "/clothes-for-woman/outerwear", label: "Верхняя одежда" },
                { path: "/clothes-for-woman/underwear", label: "Нижнее белье" },
                { path: "/clothes-for-woman/swimwear", label: "Купальники" },
                { path: "/clothes-for-woman/clothes-for-home", label: "Одежда для дома" },
                { path: "/clothes-for-woman/basic-collections", label: "Базовые коллекции" },
                { path: "/clothes-for-woman/sport", label: "Спорт" },
            ],
        },
        {
            path: "/clothes-for-man",
            label: "Мужчинам",
            submenu: [
                { path: "/clothes-for-man/view-all", label: "Смотреть все" },
                { path: "/clothes-for-man/new-products", label: "Новинки" },
                { path: "/clothes-for-man/bestsellers", label: "Хиты продаж" },
                { path: "/clothes-for-man/clothes", label: "Одежда" },
                { path: "/clothes-for-man/outerwear", label: "Верхняя одежда" },
                { path: "/clothes-for-man/underwear", label: "Нижнее белье" },
                { path: "/clothes-for-man/clothes-for-home", label: "Одежда для дома" },
                { path: "/clothes-for-man/basic-collections", label: "Базовые коллекции" },
                { path: "/clothes-for-man/sport", label: "Спорт" },
            ],
        },
        {
            path: "/accessories",
            label: "Аксессуары",
            submenu: [
                { path: "/promotions/hats", label: "Шапки" },
                { path: "/promotions/scarf", label: "Шарф" },
                { path: "/promotions/gloves", label: "Перчатки" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" }
            ],
        },
        {
            path: "/sport",
            label: "Спорт",
            submenu: [
                { path: "/promotions/sale", label: "Розпродаж" },
                { path: "/promotions/coupons", label: "Купони" },
                { path: "/promotions/gloves", label: "Перчатки" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" }
            ],
        },
        {
            path: "/bestsellers",
            label: "Хиты продаж",
            submenu: [
                { path: "/promotions/sale", label: "Розпродаж" },
                { path: "/promotions/coupons", label: "Купони" },
                { path: "/promotions/gloves", label: "Перчатки" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" }
            ],
        },
        {
            path: "/underwear",
            label: "Нижнее белье",
            submenu: [
                { path: "/promotions/sale", label: "Розпродаж" },
                { path: "/promotions/coupons", label: "Купони" },
                { path: "/promotions/gloves", label: "Перчатки" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" }
            ],
        },
        {
            path: "/view-all",
            label: "Смотреть все",
            submenu: [
                { path: "/promotions/sale", label: "Розпродаж" },
                { path: "/promotions/coupons", label: "Купони" },
                { path: "/promotions/gloves", label: "Перчатки" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" }
            ],
        },
        {
            path: "/become-seller",
            label: "Стать продавцом",
            submenu: [
                { path: "/promotions/sale", label: "Розпродаж" },
                { path: "/promotions/coupons", label: "Купони" },
                { path: "/promotions/gloves", label: "Перчатки" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" },
                { path: "/promotions/turban", label: "Чамла" },
                { path: "/promotions/twilly-tape", label: "Лента Твилли" }
            ],
        },
    ];

    return (
      <div>
        <header className="header">
          <div
            className="
              absolute top-[54px] left-[104px]
              w-[136px] h-[24px] flex items-center
              justify-center cursor-pointer iloom-logo"
          >
            <img
              src={assets.i_loom_logo}
              alt="Logo"
              className="
                w-[150px] h-[36px] object-contain transition-transform
                duration-300 ease-in-out cursor-default"
            />
          </div>
          <div
            className="
              absolute top-[47px] left-[314px]
              w-[31px] h-[31px] flex items-center
              justify-center cursor-pointer burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
          <img
            src={assets.burger_menu}
            alt="Menu"
            className="
              w-[31px] h-[31px] object-contain transition-transform
              duration-300 ease-in-out"
            style={{
              transform: menuOpen ? "rotate(360deg)" : "rotate(0deg)"
            }}
          />
        </div>
        { menuOpen && (
          <div
            className="
              absolute top-[83px] left-[100px] w-[288px] h-[715px] m-[20px]
              bg-gradient-to-br from-[#fc8bd1] to-[#fdb1e2]
              rounded-[30px] flex flex-col items-center justify-start
              py-6 z-50 shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              backdrop-blur-md animate-fade-in menu-container
            "
          >
            <nav
              className="
                flex flex-col gap-3 text-white text-[17px]
                font-semibold w-full px-6
              "
            >
              { menuItems
                  .map(({ path, label, submenu }) => (
                    <div 
                      key={path} 
                      className="relative group"
                    >
                      <div className="flex justify-between items-center justify-self-center">
                        <NavLink
                          to={path}
                          onClick={() => {
                            if (!submenu) setMenuOpen(false);
                              setActiveSubmenu(activeSubmenu === path ? null : path);
                            }}
                          className="
                            block w-full px-6 py-3 rounded-xl m-3 m-[12px]
                            text-[#ffffff] text-[20px] tracking-wide
                            bg-gradient-to-r from-[#fc8bd1]/30 to-[#fc8bd1]/10
                            transition-all duration-300 ease-in-out
                            relative overflow-hidden no-underline font-[600]
                          "
                        >
                          <span className="flex items-center gap-3 relative z-10 font-montserrat">
                            {label}
                            {submenu && (
                              <button
                                onClick={() =>
                                  setActiveSubmenu(activeSubmenu === path ? null : path)
                                }
                                className="
                                  ml-2 w-[28px] h-[28px] rounded-full
                                  flex items-center justify-center
                                  bg-transparent border-none cursor-pointer
                                  transition-all duration-300 ease-in-outs
                                  active:scale-90
                                "
                              >
                                <img
                                  src={assets.plus}
                                  alt="Plus"
                                  className={`
                                    w-[17px] h-[17px] transition-transform duration-300 ${
                                      activeSubmenu === path ? "rotate-45" : ""
                                  }`}
                                />
                              </button>
                            )}
                          </span>
                        </NavLink>
                      </div>
                      {activeSubmenu === path 
                        && submenu 
                          && (
                            <div
                              className="
                                mt-2 ml-4 flex flex-col gap-2 pl-3
                                animate-fade-in-slow sumbenu-container
                              "
                            >
                              { submenu.map(({ path, label }) => (
                                <NavLink
                                  key={path}
                                  to={path}
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setActiveSubmenu(null);
                                  }}
                                  className="
                                    text-[#ffffff] text-[15px] px-4 py-[6px]
                                    rounded-[10px] hover:bg-white hover:text-[#ffffff]
                                    hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]
                                    transition-all duration-300 ease-in-out
                                    hover:translate-x-[4px] no-underline
                                  "
                                >
                                  {label}
                                </NavLink>
                              ))} 
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                )}
                <div
                  className="
                    absolute top-[40px] left-[464px]
                    flex gap-[32px] w-[592px] h-[44px]
                    location-search"
                >
                  <button
                    className="
                      flex items-center justify-between w-[200px] h-[44px]
                      bg-[#fc8bd1] rounded-[12px] px-[16px] py-[14px] gap-[10px]
                      text-white transition-all hover:opacity-90 border-none"
                  >
                    <img
                      src={assets.location}
                      alt="Location"
                      className="
                        w-[18.7px] h-[27.2px] opacity-100"
                    />
                    <div
                      className="
                        flex flex-col w-[122px]
                        h-[29px] leading-[100%]"
                    >
                      <span
                        className="
                          font-redhat text-[10.9px] text-white
                          font-normal opacity-100 red-hat-display-400"
                      >
                        Доставить в
                      </span>
                      <span
                        className="
                          font-redhat text-[11.9px] red-hat-display-600
                          font-bold opacity-100 text-white"
                      >
                        Алматы, Казахстан
                      </span>
                    </div>
                    <img
                      src={assets.arrow_down}
                      alt="Dropdown"
                      className="
                        w-[16px] h-[16px] opacity-100"
                    />
                  </button>
                  <div
                    className="
                      relative h-[44px] bg-[#fc8bd1] rounded-[12px]
                      flex items-center pl-[15px] gap-[10px]
                      input-container mobile-input-container"
                  >
                    <img
                      src={assets.search}
                      alt="Search"
                      className="w-[20px] h-[20px] opacity-90"
                    />
                    <input
                      type="text"
                      placeholder="Введите запрос"
                      className="
                        cursor-text text-[#ffffff]
                        placeholder:text-[#ffffff] placeholder:opacity-60
                        text-[15px] font-normal bg-transparent border-none outline-none
                        leading-[100%] font-montserrat w-full mobile-input"
                    />
                  </div>
                </div>
              <div
                className="
                  absolute top-[42.52px] left-[1181.22px]
                  flex gap-[15px] items-center nav-icons"
              >
                  <div
                    className="relative"
                  >
                    <img
                      src={assets.user}
                      alt="User"
                      className="
                        w-[37.33px] h-[34.3px] p-[3px]
                        cursor-pointer hover:opacity-30
                        border-[#fc8bd1]"
                    />
                    <div
                      className="
                        absolute top-[16px] left-[12px] w-[24.3px] h-[24.3px]
                        bg-[#fc8bd1] rounded-full flex items-center justify-center
                        hover:bg-[#d629bc] cursor-pointer"
                    >
                      <span
                      className="
                        text-[#ffffff] text-[18.22px] font-normal
                        leading-[130%] font-montserrat"
                      >
                        2
                      </span>
                    </div>
                  </div>
                   <div
                    className="relative"
                  >
                    <img
                      src={assets.favorites}
                      alt="Favorites"
                      className="
                        w-[37.33px] h-[34.3px] p-[3px]
                        cursor-pointer hover:opacity-30
                        border-[#fc8bd1]"
                    />
                    <div
                      className="
                        absolute top-[16px] left-[12px] w-[24.3px] h-[24.3px]
                        bg-[#fc8bd1] rounded-full flex items-center justify-center
                        hover:bg-[#d629bc] cursor-pointer"
                    >
                      <span
                      className="
                        text-[#ffffff] text-[18.22px] font-normal
                        leading-[130%] font-montserrat"
                      >
                        2
                      </span>
                    </div>
                  </div>
                   <div
                    className="relative"
                  >
                    <img
                      src={assets.shopping_bag}
                      alt="Cart"
                      className="
                        w-[37.33px] h-[34.3px] p-[3px]
                        cursor-pointer hover:opacity-30
                        border-[#fc8bd1]"
                    />
                    <div
                      className="
                        absolute top-[16px] left-[12px] w-[24.3px] h-[24.3px]
                        bg-[#fc8bd1] rounded-full flex items-center justify-center
                        hover:bg-[#d629bc] cursor-pointer"
                    >
                      <span
                      className="
                        text-[#ffffff] text-[18.22px] font-normal
                        leading-[130%] font-montserrat"
                      >
                        2
                      </span>
                    </div>
                  </div>
              </div>
            </header>
        </div>
    );
};

export default Navbar;