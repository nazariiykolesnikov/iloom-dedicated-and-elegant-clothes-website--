import React, { useState } from "react";
import { assets } from "../assets/data/assets.js";
import { menuitems } from "../assets/data/menu-item.js";
import { NavLink } from "react-router-dom";

const Navbar = ({ favoritesCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <header className="header relative">
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
        <div className="absolute top-[83px] left-[100px] w-[288px] h-[715px] bg-gradient-to-br from-[#fc8bd1] to-[#fdb1e2] rounded-[30px] flex flex-col items-center py-6 z-50 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-md animate-fade-in">
          <nav className="flex flex-col gap-3 text-white text-[17px] font-semibold w-full px-6">
            {menuitems.map(({ path, label, submenu }) => (
              <div key={path} className="relative">
                <NavLink
                  to={path}
                  onClick={() => {
                    if (!submenu) setMenuOpen(false);
                    setActiveSubmenu(activeSubmenu === path ? null : path);
                  }}
                  className="block w-full px-6 py-3 rounded-xl m-[12px] text-white text-[20px] tracking-wide bg-gradient-to-r from-[#fc8bd1]/30 to-[#fc8bd1]/10 transition-all duration-300 ease-in-out no-underline font-[600]"
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
                  <div className="mt-2 ml-4 flex flex-col gap-2 pl-3 animate-fade-in-slow">
                    {submenu.map(({ path, label }) => (
                      <NavLink
                        key={path}
                        to={path}
                        onClick={() => {
                          setMenuOpen(false);
                          setActiveSubmenu(null);
                        }}
                        className="text-white text-[15px] px-4 py-[6px] rounded-[10px] hover:bg-white hover:text-[#fc8bd1] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 ease-in-out hover:translate-x-[4px] no-underline"
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

      {/* Іконки справа */}
      <div className="absolute top-[42px] right-[40px] flex gap-[15px] items-center">
        {/* User */}
        <div className="relative">
          <img
            src={assets.user}
            alt="User"
            className="w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
          />
          <div className="absolute top-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
            <span className="text-white text-[14px] font-bold">2</span>
          </div>
        </div>

        {/* Favorites */}
        <div className="relative">
          <img
            src={assets.favorites}
            alt="Favorites"
            className="w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
          />
          <div className="absolute top-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
            <span className="text-white text-[14px] font-bold">
              {favoritesCount ?? 0}
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
          <div className="absolute top-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
            <span className="text-white text-[14px] font-bold">2</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;