import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-5rem)] bg-[#FCFAF7]">
            <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">

                    {/* Left Content */}
                    <div className="max-w-xl">
                        <p className="mb-5 text-sm font-medium tracking-[0.3em] text-[#8A5A83] uppercase">
                            The New Collection
                        </p>

                        <h1 className="font-['Playfair_Display'] text-5xl leading-[1.1] font-semibold text-[#292629] sm:text-6xl lg:text-7xl">
                            Everyday,
                            <span className="block text-[#4A3048]">
                                Elevated.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-[#6B6468] sm:text-lg">
                            Discover thoughtfully crafted essentials designed to bring
                            effortless elegance into your everyday moments.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="/shop"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#362336]"
                            >
                                Shop Collection

                                <ArrowRight 
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                to="/collections"
                                className="inline-flex items-center justify-center rounded-full border border-[#D8CEC7] px-7 py-3.5 text-sm font-medium text-[#4A3048] transition-all duration-300 hover:border-[#4A3048] hover:bg-[#F5EFEA]"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative h-[430px] w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-[#EDE4DE] sm:h-[520px]">

                            {/* Decorative Circle */}
                            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#D9C4D5] opacity-60" />

                            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#CBB5C8] opacity-40" />

                            {/* Product Placeholder */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="flex h-64 w-48 items-center justify-center rounded-[1.5rem] border border-[#D5C5C0] bg-[#F8F3EF] shadow-xl sm:h-72 sm:w-52">
                                    <div className="text-center">
                                        <span className="text-3xl text-[#4A3048]">
                                           ✦ 
                                        </span>

                                        <p className="mt-3 font-['Playfair_Display'] text-2xl font-semibold tracking-[0.12em] text-[#4A3048]">
                                            LUMORA
                                        </p>

                                        <p className="mt-1 text-[9px] tracking-[0.25em] text-[#8A7B80]">
                                            EVERYDAY, ELEVATED.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Text */}
                            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 backdrop-blur-md">
                                <p className="text-xs tracking-[0.15em] text-[#8A5A83] uppercase">
                                    Crafted for you
                                </p>

                                <p className="mt-1 font-['Playfair_Display'] text-lg text-[#4A3048]">
                                    Timeless essentials
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;