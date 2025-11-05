import "./Subscribing.css";

const Subscribing = () => {
    return (
        <div>
            <section>
                <div className="subscribing-container bg-white border-none py-12 px-6 lg:px-20">
                    <div className="flex flex-row lg:flex-row items-center justify-between h-[190px] w-[100%] gap-6">
                        <div className="subscribing-header text-left">
                            <h2 className="text-[24px] lg:text-[28px] font-[700] text-[#212429] montserrat mb-[10px] leading-tight">
                                Подпишитесь на рассылку
                            </h2>
                            <p className="text-[##212429] text-[16px] montserrat leading-snug">
                                и получите скидку 5% на первую покупку!
                            </p>
                        </div>
                        <form className="subscribing-form">
                            <input
                                type="email"
                                placeholder="Введите ваш Email"
                                className="flex-1 border border-[#D9D9D9] rounded-full px-6 py-3 text-[#212429]  placeholder:pl-[15px] text-[16px] montserrat placeholder:ml-[10px] placeholder-[#212429] focus:outline-none focus:ring-2 focus:ring-[#FC8BD1] transition ease-in-out"
                            />
                            <button
                                type="submit"
                                className="bg-[#FC8BD1] cursor-pointer hover:bg-[#FDC5E8] ml-[25px] text-[#ffffff] border-none font-[500] text-[16px] px-8 py-3 rounded-full transition duration-300 font-montserrat whitespace-nowrap"
                            >
                                Подписаться
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribing;