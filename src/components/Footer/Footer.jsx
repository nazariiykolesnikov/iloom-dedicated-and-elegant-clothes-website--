import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/data/assets.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column ml-[105px]">
                    <div className="footer-contact pb-[10px]">
                        <div className="footer-icon">
                            <button className="footer-buttons w-[56px] h-[56px] rounded-[50%] border-none">
                                <img src={assets.delivery} className="w-[42px] h-[42px]" alt=""/>
                            </button>
                        </div>
                        <span className="montserrat font-[400] text-[16px]">
                            <NavLink to="#">
                                Доставка
                            </NavLink>
                        </span>
                    </div>
                    <h4 className="footer-lists__heading text-left pb-[10px] montserrat font-[600]">Покупателям</h4>
                    <ul className="footer-lists text-left font-[400] text-[14px] montserrat text-[#ffffff]">
                        <li><NavLink to="/privacy" className="">Политика персональных данных</NavLink></li>
                        <li><NavLink to="/promotions" className="">Акции</NavLink></li>
                        <li><NavLink to="/certificates" className="">Подарочные сертификаты</NavLink></li>
                        <li><NavLink to="/promo-rules" className="">Правила использования промокодов</NavLink></li>
                    </ul>
                    <h5 className="footer-bottom text-left font-[500] mt-[55px] text-[#737373] montserrat text-[12px]">
                        © 2020 – 2022 ООО «Омикс Стор».<br/> Все права защищены.
                    </h5>
                </div>

                <div className="footer-column text-left">
                    <div className="footer-contact pb-[10px]">
                        <div className="footer-icon">
                            <button className="footer-buttons w-[56px] h-[56px] rounded-[50%] border-none">
                                <img src={assets.turn_back} className="w-[35px] h-[35px]" alt=""/>
                            </button>
                        </div>
                        <span className="montserrat font-[400] text-[16px]">
                            <NavLink to="/about">
                                 Возврат и обмен
                            </NavLink>
                        </span>
                    </div>
                    <h4 className="footer-lists__heading text-left pb-[10px] montserrat font-[600]">Партнерам</h4>
                    <ul className="footer-lists text-left font-[400] text-[14px] montserrat text-[#ffffff]">
                        <li><NavLink to="/about">Партнерская программа</NavLink></li>
                        <li><NavLink to="/contacts">Правила использования промокодов</NavLink></li>
                    </ul>
                    <h5 className="footer-bottom text-left font-[500] mt-[118px] text-[#737373] montserrat text-[12px]">
                        Общество с ограниченной<br/> ответственностью «Омикс Стор»,<br/>
                        юр.адрес: 220020, Минск, пр.<br/> Победителей, 100, оф. 203
                    </h5>
                </div>

                <div className="footer-column text-left">
                    <div className="footer-contact pb-[10px]">
                        <div className="footer-icon">
                            <button className="footer-buttons w-[56px] h-[56px] rounded-[50%] border-none">
                                <img src={assets.e_mail} className="w-[32px] h-[32px]" alt=""/>
                            </button>
                        </div>
                        <span className="montserrat font-[400] text-[16px]">
                             <NavLink to="mailto:iloom.style@email.com">
                                 iloom.style@email.com
                             </NavLink>
                        </span>
                    </div>
                    <h4 className="footer-lists__heading text-left pb-[10px] montserrat font-[600]">О компании</h4>
                    <ul className="footer-lists text-left font-[400] text-[14px] montserrat text-[#ffffff]">
                        <li><NavLink to="/about">О нас</NavLink></li>
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                        <li><NavLink to="/news">Новости</NavLink></li>
                        <li><NavLink to="/vacancies">Вакансии</NavLink></li>
                        <li><NavLink to="/partners">Партнёрская программа</NavLink></li>
                    </ul>
                    <h5 className="footer-bottom text-left font-[500] mt-[20px] text-[#737373] montserrat text-[12px]">
                        В торговом реестре с 23 июня 2010 г.,<br/> № регистрации 256476, УНП 14886482
                    </h5>
                </div>

                <div className="footer-column w-[400px]">
                    <h4 className="text-left pb-[10px] montserrat font-[600] mt-[85px]">Мы в соцсетях</h4>
                    <div className="social-icons text-left">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook} className="w-[41px] h-[41px] ml-[-3px]" alt="Facebook"/>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.youtube} className="w-[38px] h-[38px]" alt="YouTube"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.instagram} className="w-[52px] h-[52px] mt-[-8px]" alt="Instagram"/>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter} className="w-[38px] h-[38px]" alt="Twitter"/>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.tiktok} className="w-[38px] h-[38px]" alt="TikTok"/>
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <img src={assets.telegram} className="w-[38px] h-[38px]" alt="Telegram"/>
                        </a>
                    </div>
                    <div className="payment-systems text-left">
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img className="w-[105px] h-[50px]" src={assets.belcard} alt="Belcard"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img className="ml-[-20px] w-[80px] h-[40px]" src={assets.visa} alt="Visa"/>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img  className="w-[80px] h-[40px]" src={assets.mastercard} alt="MasterCard"/>
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <img className="w-[96px] h-[37px] ml-[-6px]" src={assets.mir} alt="Mir"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;