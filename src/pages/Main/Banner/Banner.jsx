import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <section className="banner bg-[#ffffff]">
                <div className="container mx-auto px-6 py-20 lg-py-32">
                    <div className="banner-slogans__container max-w-3xl">
                        <h1 className="fewer-words-more-embroidery leading-[100%] w-[1033px] h-[200px] text-left montserrat text-[#212429] tracking-[0]">
                            Меньше слов — больше вышивки
                        </h1>
                        <h4 className="everything-else-is-excuses w-[656px] h-[416px] text-left md:text-[20px] font-[400] lg-text-[24px] leading-[1.5] montserrat text-[#4a4a4a]">
                            Всё остальное — отговорки. Мы создаём одежду, в которой всё уже сказано за тебя.
                        </h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner;
