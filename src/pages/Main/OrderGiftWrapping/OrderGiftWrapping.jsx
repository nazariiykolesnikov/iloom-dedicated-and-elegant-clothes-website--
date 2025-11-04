import order_gift_wrapping from '../../../assets/images/banners/Order gift wrapping/order_gift_wrapping.png';
import i_look_gift_wrapping from '../../../assets/images/banners/Order gift wrapping/i_look_gift_wrapping.png';
import "./OrderGiftWrapping.css";

const OrderGiftWrapping = () => {
    return (
        <div>
            <section
                className="relative w-full h-[469px] mt-[75px] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${order_gift_wrapping})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Зображення коробки */}
                <img
                    src={i_look_gift_wrapping}
                    alt="Подарочная упаковка I LOOM"
                    className="absolute left-[-59px] bottom-[-330px] w-[879.375px] h-[833.2px] object-contain"
                />

                {/* Текст і кнопка */}
                <div className="absolute top-[10px] left-[10px] w-[648px] h-[168px]">
                    <h2
                        className="absolute left-[521px] top-[40px] w-[749px] text-left
      text-[#ffffff] font-[800] text-[56px] leading-[150%]
      tracking-[0] montserrat
    "
                    >
                        Закажи подарочную<br/>упаковку
                    </h2>
                <button
                    className="absolute left-[521px] top-[270px]
        bg-transparent text-[#ffffff] text-[19px]
        px-[32px] py-[12px] rounded-[25px] border-[#ffffff]
         cursor-pointer font-[800] montserrat border-[1px]
        hover:bg-[#000000]"
                >
                    Заказать
                </button>
        </div>
</section>

</div>
)
}

export default OrderGiftWrapping;
