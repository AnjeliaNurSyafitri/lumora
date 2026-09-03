import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../../components/common/Reveal";

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-[#FCFAF7]">

            {/* Hero */}
            <section className="bg-[#F5EFEA]">
                <div className="mx-auto w-full max-w-[1280px] px-5 py-20 text-center sm:px-8 lg:px-10 lg:py-24">
                    <Reveal duration={800}>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                            Our Story
                        </p>
                    </Reveal>

                    <Reveal delay={120} duration={800}>
                       <h1 className="mx-auto mt-4 max-w-3xl font-['Playfair_Display'] text-5xl font-semibold leading-tight text-[#292629] sm:text-6xl lg:text-7xl">
                            Beauty in the
                            <span className="block text-[#4A3048]">
                                everyday.
                            </span>
                        </h1> 
                    </Reveal>

                    <Reveal delay={220} duration={800}>
                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6B6468] sm:text-base">
                            LUMORA was created around a simple idea: Everyday
                            essentials can feel beautiful, intentional, and
                            meaningful.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Story */}
            <section>
                <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
                    
                    {/* Visual */}
                    <Reveal duration={800} className="h-full">
                        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#E7DCD8] transition-transform duration-500 hover:-translate-y-1 sm:min-h-[520px]">

                            {/* Decorative Circles */}
                            <div className="about-float absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D2BEC9] opacity-60 transition-transform duration-700 group-hover:scale-110" />

                            <div className="about-float-reverse absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#CBB5C8] opacity-40 transition-transform duration-700 group-hover:scale-105" />
                            
                            {/* Product Visual */}
                            <div className="relative flex h-72 w-52 items-center justify-center rounded-[1.5rem] border border-white/60 bg-[#F8F3EF] shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_rgba(74,48,72,0.12)] sm:h-80 sm:w-56">
                                <div className="text-center transition-transform duration-500 group-hover:-translate-y-1">
                                    <span className="inline-block text-4xl text-[#4A3048] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                                        ✦
                                    </span>

                                    <p className="mt-4 font-['Playfair_Display'] text-3xl font-semibold tracking-[0.1em] text-[#4A3048]">
                                        LUMORA
                                    </p>

                                    <p className="mt-2 text-[9px] tracking-[0.3em] text-[#8A7B80]">
                                        EVERYDAY, ELEVATED.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Floating Information */}
                            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/50 bg-white/70 px-5 py-4 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A5A83]">
                                    Since 2026
                                </p>

                                <p className="mt-1 font-['Playfair_Display'] text-lg text-[#4A3048]">
                                    Everyday, Elevated.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Content */}
                    <Reveal delay={150} duration={800}>
                        <div className="max-w-xl">
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                                Who we are
                            </p>

                            <h2 className="mt-4 font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#292629] sm:text-5xl">
                                Thoughtful essentials,
                                <span className="block text-[#4A3048]">
                                    beautifully simple.
                                </span>
                            </h2>

                            <p className="mt-6 text-sm leading-7 text-[#6B6468] sm:text-base">
                                At LUMORA, we believe that the little things can
                                make everyday life feel more special. From
                                skincare and beauty to fragrance and body care,
                                every essential is thoughtfully selected with
                                simplicity and elegance in mind.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-[#6B6468] sm:text-base">
                                Our approach is intentionally simple: fewer
                                distractions, thoughtful details, and products
                                that naturally fit into your everyday rituals.
                            </p>

                            <Link
                                to="/collections"
                                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#362336] hover:shadow-lg"
                            >
                                Explore Collections

                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Values */}
            <section className="bg-[#F5EFEA]">
                <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

                    <Reveal duration={800}>
                        <div className="max-w-2xl">
                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                                What matters to us
                            </p>

                            <h2 className="mt-4 font-['Playfair_Display'] text-4xl font-semibold text-[#292629] sm:text-5xl">
                                The Lumora way.
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

                        {/* Value 01 */}
                        <Reveal delay={100} duration={700} className="h-full">
                            <div className="group h-full rounded-[1.5rem] border border-[#E1D6D0] bg-[#FCFAF7] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D8C7D3] hover:shadow-xl">
                                <span className="text-2xl text-[#4A3048] transition-transform duration-300 group-hover:translate-x-1">
                                    01
                                </span>

                                <h3 className="mt-8 font-['Playfair_Display'] text-2xl font-semibold text-[#4A3048] transition-colors duration-300 group-hover:text-[#6B4566]">
                                    Thoughtful
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#6B6468]">
                                    Every detail is considered with intention,
                                    from the products we feature to the way
                                    they become part of your routine.
                                </p>
                            </div>
                        </Reveal>

                        {/* Value 02 */}
                        <Reveal delay={200} duration={700} className="h-full">
                            <div className="group h-full rounded-[1.5rem] border border-[#E1D6D0] bg-[#FCFAF7] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D8C7D3] hover:shadow-xl">
                                <span className="text-2xl text-[#4A3048] transition-transform duration-300 group-hover:translate-x-1">
                                    02
                                </span>

                                <h3 className="mt-8 font-['Playfair_Display'] text-2xl font-semibold text-[#4A3048] transition-colors duration-300 group-hover:text-[#6B4566]">
                                    Effortless
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#6B6468]">
                                    We believe beauty should feel natural and
                                    uncomplicated, fitting effortlessly into
                                    everyday moments.
                                </p>
                            </div>
                        </Reveal>

                        {/* Value 03 */}
                        <Reveal delay={300} duration={700} className="h-full">
                            <div className="group h-full rounded-[1.5rem] border border-[#E1D6D0] bg-[#FCFAF7] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D8C7D3] hover:shadow-xl">
                                <span className="text-2xl text-[#4A3048] transition-transform duration-300 group-hover:translate-x-1">
                                    03
                                </span>

                                <h3 className="mt-8 font-['Playfair_Display'] text-2xl font-semibold text-[#4A3048] transition-colors duration-300 group-hover:text-[#6B4566]">
                                    Timeless
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#6B6468]">
                                    We choose simplicity over trends, creating
                                    an experience that feels relevant today
                                    and beautiful tomorrow.
                                </p>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section>
                <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 py-20 text-center sm:px-8 lg:px-10 lg:py-24">

                    <Reveal duration={800}>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                            Everyday, elevated.
                        </p>
                    </Reveal>

                    <Reveal delay={120} duration={800}>
                        <h2 className="mt-4 max-w-2xl font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#4A3048] sm:text-5xl">
                            Make room for the little things that feel beautiful.
                        </h2>
                    </Reveal>

                    <Reveal delay={220} duration={800}>
                        <Link
                            to="/shop"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#362336] hover:shadow-lg"
                        >
                            Shop Collection

                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </Reveal>

                </div>
            </section>

        </main>
    );
};

export default AboutPage;