import { Heart, Sparkles, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
    {
        icon: Sparkles,
        title: "Thoughtfully Made",
        description: "Every detail is considered to create products you'll love using.",
    },
    {
        icon: Leaf,
        title: "Simple & International",
        description: "We believe everyday essentials should feel effortless and meaningful.",
    },
    {
        icon: Heart,
        title: "Made for You",
        description: "Designed to become a beautiful part of your everyday rituals.",
    },
];

const AboutSection = () => {
    return (
        <section className="bg-[#FCFAF7] py-20 sm:py-24">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

                {/* Main About */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Visual */}
                    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#EDE4DE]">
                        {/* Decorative Shapes */}
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#D9C4D5]/60" />

                        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#CBB5C8]/40" />

                        {/* Center Content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-64 w-52 flex-col items-center justify-center rounded-[1.5rem] border border-white/70 bg-[#F8F3EF]/80 shadow-xl backdrop-blur-sm">
                                <span className="text-4xl text-[#4A3048]">
                                    ✦
                                </span>

                                <p className="mt-4 font-['Playfair_Display'] text-3xl font-semibold tracking-[0.12em] text-[#4A3048]">
                                    LUMORA
                                </p>

                                <p className="mt-2 text-[9px] tracking-[0.3em] text-[#8A7B80]">
                                    EVERYDAY, ELEVATED.
                                </p>
                            </div>
                        </div>

                        {/* Floating Label */}
                        <div className="absolute bottom-6 left-6 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 backdrop-blur-md">
                            <p className="text-xs uppercase tracking-[0.18em] text-[#8A5A83]">
                                Our philosophy
                            </p>

                            <p className="mt-1 font-['Playfair_Display'] text-lg text-[#4A3048]">
                                Beauty in simplicity
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-xl">
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                            About Lumora
                        </p>

                        <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#292629] sm:text-5xl">
                            Designed for the
                            <span className="block text-[#4A3048]">
                                everyday moments.
                            </span>
                        </h2>

                        <p className="mt-6 text-base leading-7 text-[#6B6468]">
                            LUMORA is a beauty and lifestyle brand built around
                            the idea that everyday moments deserve a little
                            more intention. We curate thoughtful essentials
                            that bring simplicity, comfort, and elegance into
                            your daily rituals.
                        </p>

                        <p className="mt-4 text-base leading-7 text-[#6B6468]">
                            From skincare to fragrance, every collection is
                            designed to feel timeless, effortless, and
                            uniquely yours.
                        </p>

                        <Link
                            to="/about"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#4A3048]"
                        >
                            Discover our story

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                               → 
                            </span>
                        </Link>
                    </div>

                </div>

                {/* Values */}
                <div className="mt-20 grid grid-cols-1 gap-8 border-t border-[#E9E2DA] pt-12 sm:grid-cols-3">
                    {values.map((value) => {
                        const Icon = value.icon;

                        return (
                            <div key={value.title}>
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5EFEA] text-[#4A3048]">
                                    <Icon
                                        size={19}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#4A3048]">
                                    {value.title}
                                </h3>

                                <p className="mt-2 max-w-xs text-sm leading-6 text-[#6B6468]">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;