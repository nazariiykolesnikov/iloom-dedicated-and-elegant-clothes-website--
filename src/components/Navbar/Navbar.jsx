import { useState } from "react";
import { assets } from "../../assets/data/assets.js";
import { menuitems } from "../../assets/data/menu-item.js";
import ProductSearchEngine from "../../components/Navbar/ProductSearchEngine/ProductSearchEngine.jsx";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ counters }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeTab, setActiveTab] = useState('login');

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
      <header className="relative header__section">
        <div className="header relative ml-[-115px] mt-[-300px]">
          <div className="i-loom-button__section w-[150px] h-[36px] mt-[-5px]">
            <img
                src={assets.i_loom_logo}
                alt="Logo"
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
            />
          </div>
          <div
              className="burger-menu__section w-[31px] h-[31px] flex items-center justify-center cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
                src={assets.burger_menu}
                alt="Menu"
                className="burger-menu__button w-full h-full object-contain transition-transform duration-300 ease-in-out"
                style={{ transform: menuOpen ? "rotate(360deg)" : "rotate(0deg)" }}
            />
          </div>
          {menuOpen && (
              <div className="absolute top-[93px] left-[100px] w-[288px] h-[715px] bg-gradient-to-br from-[#fc8bd1] to-[#fdb1e2] rounded-[30px] flex flex-col items-center py-6 z-50 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-md animate-fade-in">
                <nav className="flex flex-col gap-3 text-white text-[17px] font-semibold w-full px-6 mt-[10px] ml-[15px]">
                  {menuitems.map(({ path, label, submenu }) => (
                      <div key={path} className="relative">
                        <NavLink
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
                                      className="text-[#ffffff] text-[15px] py-[7px] ml-[-10px] rounded-[10px] hover:bg-white hover:text-[#fafafa] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 ease-in-out hover:translate-x-[4px] no-underline"
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
          <div className="search-location__section flex gap-[24px] ml-[-40px] mt-[-58px] items-center location-search">
              <button
                className="search-location__button text-left mt-[58px] text-[11px] w-[279px] h-[44px] bg-[#FC8BD1] rounded-[12px] px-[16px] py-[14px] gap-[10px] text-[#FFFFFF] transition-all hover:opacity-80 border-none cursor-pointer">
              <div className="flex items-center gap-[8px]">
                <img
                    src={assets.location}
                    alt="Location"
                    className="w-[20px] h-[20px] object-contain"
                />
                <div className="flex flex-col leading-[16px] font-medium">
                  <span className="
                    red-hat-display text-[11px]"
                  >
                    Доставить в
                  </span>
                  <span className="
                    montserrat text-[12px] font-[600] text-[#ffffff]
                  ">
                    Алматы, Казахстан
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
          <div className="search-location__section flex gap-[24px] ml-[280px] mt-[-15px] items-center location-search">
            <ProductSearchEngine />
          </div>
          <div className="absolute top-[42px] right-[-75px] flex gap-[15px] items-center">
            <div className="relative user-button__section">
                    <img
                        src={assets.user}
                        alt="User"
                        onClick={openModal}
                        className="user-button__image w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
                    />
                    {isOpen && (
                      <div
                          className="modal-overlay"
                          onClick={closeModal}
                      >
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                          <button
                              className="close-button"
                              onClick={closeModal}
                          >
                            ×
                          </button>
                  <div className="tabs">
                    <div className="tab__header">
                      <div
                        className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveTab('login')}
                      >
                        Войти
                      </div>
                      <div
                        className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
                        onClick={() => setActiveTab('register')}
                      >
                        Зарегистрироваться
                      </div>
                    </div>
                    <div className="tab__content">
                      {activeTab === 'login' && (
                        <div
                            className="tab__content-wrapper active"
                            id="login"
                        >
                          <form className="form">
                            <label
                                className="tab-form__label"
                                htmlFor="email"
                            >
                              Почта
                            </label>
                            <input
                                className="tab-form__input"
                                type="email" id="email"
                                name="email"
                                required
                            />
                            <label
                                className="tab-form__label"
                                htmlFor="password"
                            >
                              Пароль
                            </label>
                            <input
                                className="tab-form__input"
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                            <a
                                href="#"
                                className="forgot"
                            >
                              Забыли пароль?
                            </a>
                            <button
                                className="tab-form__submit"
                                type="submit"
                            >
                              Войти
                            </button>
                          </form>
                          <p
                              className="google-auth"
                          >
                            Войти через
                          </p>
                          <button
                              className="google-login"
                          >
                            <img
                                className="google-login__icon"
                                src={assets.google_icon}
                                alt="Google"
                            />
                          </button>
                        </div>
                      )}
                      {activeTab === 'register' && (
                        <div
                            className="tab__content-wrapper active"
                            id="register"
                        >
                          <form className="form">
                            <label className="tab-form__label" htmlFor="new-email">Почта</label>
                            <input className="tab-form__input" type="email" id="new-email" name="new-email" required />
                            <label className="tab-form__label" htmlFor="new-password">Пароль</label>
                            <input className="tab-form__input" type="password" id="new-password" name="new-password" required />
                            <a href="#" className="forgot">Длина пароля не менее 6 символов</a>
                            <label className="tab-form__input" htmlFor="confirm-password">Подтверждение пароля</label>
                            <input type="password" id="confirm-password" name="confirm-password" required />
                            <button className="tab-form__submit" type="submit">Зарегистрироваться</button>
                          </form>
                          <p className="google-auth">Регистрация через</p>
                          <button className="google-login">
                            <img className="google-login__icon" src={assets.google_icon} alt="Google" />
                          </button>
                        </div>
                      )}
                    </div> 
                  </div>
                        </div>
                      </div>
                    )}
                <div className="
                  user-button absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex
                  items-center justify-center hover:bg-[#d629bc]
                ">
                    <span className="
                      user-button__counter text-[#ffffff] text-[14px] font-bold
                    ">
                      0
                    </span>
                </div>
            </div>
            <div className="relative favorites-button__section">
              <img
                  src={assets.favorites}
                  alt="Favorites"
                  className="user-logo__image w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
              />
              <div
                  className="favorites-button absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
              <span className="favorites-button__counter text-[#ffffff] text-[14px] font-bold">
                0
              </span>
              </div>
            </div>
            <div className="relative shopping-card__section">
              <img
                  src={assets.shopping_bag}
                  alt="Cart"
                  className="shopping-card-button w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30"
              />
              <div
                  className="favorites-button absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]">
              <span className="favorites-button__counter">
                0
              </span>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;