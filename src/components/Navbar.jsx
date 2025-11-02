import React, { useState } from "react";
import { assets } from "../assets/data/assets.js";
import { menuitems } from "../assets/data/menu-item.js";
import { NavLink } from "react-router-dom";

const Navbar = ({ favoritesCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
      <header className="relative">
        <div className="header relative ml-[-115px] mt-[-300px]">
          {/* Логотип */}
          <div className="absolute top-[54px] left-[104px] w-[150px] h-[36px]">
            <img
                src={assets.i_loom_logo}
                alt="Logo"
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Бургер-меню */}
          <div
              className="absolute top-[47px] left-[314px] w-[31px] h-[31px] flex items-center justify-center cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
                src={assets.burger_menu}
                alt="Menu"
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
                style={{ transform: menuOpen ? "rotate(360deg)" : "rotate(0deg)" }}
            />
          </div>

          {/* Меню */}
          {menuOpen && (
              <div className="absolute top-[93px] left-[100px] w-[288px] h-[715px] bg-gradient-to-br from-[#fc8bd1] to-[#fdb1e2] rounded-[30px] flex flex-col items-center py-6 z-50 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-md animate-fade-in">
                <nav className="flex flex-col gap-3 text-white text-[17px] font-semibold w-full px-6 mt-[10px] ml-[15px]">
                  {menuitems.map(({ path, label, submenu }) => (
                      <div key={path} className="relative">
                        <NavLink
                            // to={path}
                            onClick={() => {
                              if (!submenu) setMenuOpen(false);
                              setActiveSubmenu(activeSubmenu === path ? null : path);
                            }}
                            className="block w-full px-6 py-3 rounded-xl m-[12px] text-[#ffffff] text-[20px] tracking-wide bg-gradient-to-r from-[#fc8bd1]/30 to-[#fc8bd1]/10 transition-all duration-300 ease-in-out no-underline font-[600]"
                        >
                    <span className="flex items-center gap-3 font-montserrat">
                      {label}
                      {submenu && (
                          <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubmenu(activeSubmenu === path ? null : path);
                              }}
                              className="ml-2 w-[28px] h-[28px] rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out active:scale-90"
                          >
                            <img
                                src={assets.plus}
                                alt="Plus"
                                className={`w-[17px] h-[17px] transition-transform duration-300 ${
                                    activeSubmenu === path ? "rotate-45" : ""
                                }`}
                            />
                          </button>
                      )}
                    </span>
                        </NavLink>

                        {/* Підменю */}
                        {activeSubmenu === path && submenu && (
                            <div className="mt-2 ml-4 flex flex-col gap-2 pl-3 animate-fade-in-slow text-[#ffffff]">
                              {submenu.map(({ path, label }) => (
                                  <NavLink
                                      key={path}
                                      to={path}
                                      onClick={() => {
                                        setMenuOpen(false);
                                        setActiveSubmenu(null);
                                      }}
                                      className="text-[#ffffff] text-[15px] px-4 py-[6px] rounded-[10px] hover:bg-white hover:text-[#fc8bd1] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 ease-in-out hover:translate-x-[4px] no-underline"
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

          {/* Локація */}
          <div className="absolute top-[40px] left-[464px] flex gap-[24px] items-center location-search">
            {/* Кнопка локації */}
            <button
                className="flex items-center justify-between text-left text-[11px] w-[279px] h-[44px] bg-[#FC8BD1] rounded-[12px] px-[16px] py-[14px] gap-[10px] text-[#FFFFFF] transition-all hover:opacity-80 border-none cursor-pointer">
              <div className="flex items-center gap-[8px]">
                <img
                    src={assets.location}
                    alt="Location"
                    className="w-[20px] h-[20px] object-contain"
                />
                <div className="flex flex-col leading-[16px] font-medium">
                  <span className="red-hat-display text-[11px]">Доставить в</span>
                  <span className="montserrat text-[12px] font-[600] text-[#ffffff]">Алматы, Казахстан</span>
                </div>
              </div>
              <img
                  src={assets.arrow_down}
                  alt="Dropdown arrow"
                  className="w-[16px] h-[16px] object-contain"
              />
            </button>

            {/* Пошукова строка */}
            <div className="relative w-[284px] h-[44px] top-[-1px]">
              <input
                  type="text"
                  placeholder="Введите запрос"
                  className="w-full border-none h-full rounded-[12px] bg-[#FC8BD1] text-[#FFFFFF] placeholder-[#FFFFFF] px-[44px] text-[15px] font-medium outline-none focus:ring-2 focus:ring-[#fc8bd1]/50 transition-all"
              />
              <img
                  src={assets.search}
                  alt="Search"
                  className="absolute left-[12px] top-[50%] translate-y-[-50%] w-[20px] h-[20px] object-contain pointer-events-none"
              />
            </div>
          </div>


          {/* Іконки справа */}
          <div className="absolute top-[42px] right-[-75px] flex gap-[15px] items-center">
            {/* User */}
            <div className="relative">
              <img
                  src={assets.user}
                  alt="User"
                  className="w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
              />
              <div
                  className="absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
                <span className="text-[#ffffff] text-[14px] font-bold">2</span>
              </div>
            </div>

            {/* Favorites */}
            <div className="relative">
              <img
                  src={assets.favorites}
                  alt="Favorites"
                  className="w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
              />
              <div
                  className="absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
              <span className="text-[#ffffff] text-[14px] font-bold">
                {favoritesCount}
              </span>
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <img
                  src={assets.shopping_bag}
                  alt="Cart"
                  className="w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
              />
              <div className="absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
                <span className="text-[#ffffff] text-[14px] font-bold">2</span>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;