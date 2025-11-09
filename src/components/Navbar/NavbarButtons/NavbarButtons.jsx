import { useState } from "react";
import { assets } from "../../../assets/data/assets.js";
import "../Navbar.css";

const NavbarButtons = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="absolute top-[42px] right-[-75px] flex gap-[15px] items-center">
            <div
                className="relative user-button__section"
            >
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
                                            <form
                                                className="form"
                                            >
                                                <label
                                                    className="tab-form__label"
                                                    htmlFor="email"
                                                >
                                                    Почта
                                                </label>
                                                <input
                                                    className="tab-form__input"
                                                    type="email"
                                                    id="email"
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
                                            <form
                                                className="form"
                                            >
                                                <label
                                                    className="tab-form__label"
                                                    htmlFor="new-email"
                                                >
                                                    Почта
                                                </label>
                                                <input
                                                    className="tab-form__input"
                                                    type="email" id="new-email"
                                                    name="new-email"
                                                    required
                                                />
                                                <label
                                                    className="tab-form__label"
                                                    htmlFor="new-password"
                                                >
                                                    Пароль
                                                </label>
                                                <input
                                                    className="tab-form__input"
                                                    type="password"
                                                    id="new-password"
                                                    name="new-password"
                                                    required
                                                />
                                                <a
                                                    href="#"
                                                    className="forgot"
                                                >
                                                    Длина пароля не менее 6 символов
                                                </a>
                                                <label
                                                    className="tab-form__input"
                                                    htmlFor="confirm-password"
                                                >
                                                    Подтверждение пароля
                                                </label>
                                                <input
                                                    type="password"
                                                    id="confirm-password"
                                                    name="confirm-password"
                                                    required
                                                />
                                                <button
                                                    className="tab-form__submit"
                                                    type="submit"
                                                >
                                                    Зарегистрироваться
                                                </button>
                                            </form>
                                            <p className="google-auth">
                                                Регистрация через
                                            </p>
                                            <button className="google-login">
                                                <img
                                                    className="google-login__icon"
                                                    src={assets.google_icon}
                                                    alt="Google"
                                                />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className="
                          user-button absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1]
                          rounded-full flex items-center justify-center hover:bg-[#d629bc]
                      ">
                        <span
                            className="
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
                className="
                        user-logo__image w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30
                    "/>
            <div
                className="
                        favorites-button absolute bottom-[0px] left-[20px] w-[24px] h-[24px]
                        bg-[#fc8bd1] rounded-full flex items-center justify-center hover:bg-[#d629bc]
                    ">
                      <span
                          className="
                          favorites-button__counter text-[#ffffff] text-[14px] font-bold
                      ">
                        0
                      </span>
            </div>
        </div>
        <div className="relative shopping-card__section">
            <img
                src={assets.shopping_bag}
                alt="Cart"
                className="
                        shopping-card-button w-[37px] h-[34px] p-[3px] cursor-pointer hover:opacity-30
                    "/>
            <div
                className="
                        favorites-button absolute bottom-[0px] left-[20px] w-[24px] h-[24px] bg-[#fc8bd1]
                        rounded-full flex items-center justify-center hover:bg-[#d629bc]
                    ">
                      <span
                          className="
                          favorites-button__counter
                      ">
                        0
                      </span>
            </div>
        </div>
        </div>
);
}

export default NavbarButtons;