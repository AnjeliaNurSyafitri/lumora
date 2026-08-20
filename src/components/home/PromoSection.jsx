import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PromoSection = () => {
    return (
        <section className="bg-[#FCFAF7] py-20 sm:py-24">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#4A3048]">

                    {/* Decorative Elements */}
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8A5A83]/40" />

                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#CBB5C8]/20" />

                    <div className="absolute right-[25%] top-10 h-3 w-3 rounded-full bg-[#E9DDE7]" />

                    <div className="absolute bottom-16 right-[38%] h-2 w-2 rounded-full bg-[#D9C4D5]" />

                    {/* Content */}
                    <div className="relative grid min-h-[420px] grid-cols-1 items-center gap-10 px-7 py-14 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-16">

                        {/* Left Content */}
                        <div className="max-w-xl">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                                <Sparkles
                                    size={15}
                                    strokeWidth={1.5}
                                    className="text-[#E9DDE7]"
                                />

                                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#E9DDE7]">
                                    Just for you
                                </span>
                            </div>

                            <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                                A little luxury,
                                <span className="block text-[#D9C4D5]">
                                    every day.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-lg text-sm leading-7 text-[#E5DDE3] sm:text-base">
                                Discover everyday essentials thoughtfully designed
                                to make your daily rituals feel a little more special.
                            </p>

                            <Link
                                to="/shop"
                                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#4A3048] transition-all duration-300 hover:bg-[#F5EFEA]"
                            >
                                Shop now

                                <ArrowRight
                                    size={17}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        {/* Right Visual */}
                        <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-[320px]">

                            {/* Large Circle */}
                            <div className="absolute h-64 w-64 rounded-full border border-white/15 bg-white/5 sm:h-72 sm:w-72" />

                            {/* Inner Circle */}
                            <div className="absolute h-48 w-48 rounded-full border border-white/10 bg-[#D9C4D5]/10 sm:h-56 sm:w-56" />

                            {/* Product */}
                            <div className="relative flex h-56 w-36 items-center justify-center rounded-[1.5rem] border border-white/30 bg-[#F8F3EF]/90 shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0 sm:h-64 sm:w-40">
                                <div className="text-center">
                                    <span className="text-3xl text-[#4A3048]">
                                        ✦
                                    </span>

                                    <p className="mt-3 font-['Playfair_Display'] text-xl font-semibold tracking-[0.12em] text-[#4A3048]">
                                        LUMORA
                                    </p>

                                    <p className="mt-1 text-[8px] tracking-[0.25em] text-[8A7B80]">
                                        EVERYDAY, ELEVATED.
                                    </p>
                                </div>
                            </div>

                            {/* Small Decorative Card */}
                            <div className="absolute bottom-2 left-[8%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md sm:left-[12%]">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D9C4D5]">
                                    Lumora
                                </p>

                                <p className="mt-1 font-['Playfair_Display'] text-sm text-white">
                                    Everyday essentials
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;