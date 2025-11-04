// import { instagramProducts } from "../assets/data/instagram-products.js";
import i_loom_style_instagram_01 from "../../../assets/images/instagram/i_loom_style_instagram_01.png";
import i_loom_style_instagram_02 from "../../../assets/images/instagram/i_loom_style_instagram_02.png";
import i_loom_style_instagram_03 from "../../../assets/images/instagram/i_loom_style_instagram_03.png";
import i_loom_style_instagram_04 from "../../../assets/images/instagram/i_loom_style_instagram_04.png";
import i_loom_style_instagram_05 from "../../../assets/images/instagram/i_loom_style_instagram_05.png";
import i_loom_style_instagram_06 from "../../../assets/images/instagram/i_loom_style_instagram_06.png";
import i_loom_style_instagram_07 from "../../../assets/images/instagram/i_loom_style_instagram_07.png";
import i_loom_style_instagram_08 from "../../../assets/images/instagram/i_loom_style_instagram_08.png";
import "./ILoomStyleInstagram.css";

const ILoomStyleInstagram = () => {
    return (
        <div>
            <section className="w-full bg-white py-[60px] px-[40px] ml-[-38px]">
                {/* Заголовок */}
                <div className="flex justify-between items-center mb-[40px]">
                    <h2 className="text-[20px] font-[800] montserrat text-[#1a1a1a]">@ILOOM.STYLE</h2>
                    <span className="text-[20px] font-[800] montserrat text-[#d68fc2]">INSTAGRAM</span>
                </div>

                {/* Сітка зображень */}
                <div className="grid grid-cols-4 gap-[24px]">
                    {[
                        i_loom_style_instagram_01,
                        i_loom_style_instagram_02,
                        i_loom_style_instagram_03,
                        i_loom_style_instagram_04,
                        i_loom_style_instagram_05,
                        i_loom_style_instagram_06,
                        i_loom_style_instagram_07,
                        i_loom_style_instagram_08,
                    ].map((src, index) => (
                        <div key={index} className="relative rounded-[12px] overflow-hidden shadow-md">
                            <img
                                src={src}
                                alt={`${index + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div
                                className="absolute top-[12px] right-[12px] w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shadow-md">
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ILoomStyleInstagram;
