import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const collections = [
    {
        id: 1,
        title: "Everyday Essentials",
        description:
            "Thoughtfully chosen essentials for effortless everyday moments.",
        bg: "bg-[#E8DDD8]",
        accent: "bg-[#D2BFC7]",
    },
    {
        id: 2,
        title: "Soft Glow",
        description:
            "Delicate beauty essentials made for a naturally radiant look.",
        bg: "bg-[#E7D9D5]",
        accent: "bg-[#D8B8BE]",
    },
    {
        id: 3,
        title: "Evening Ritual",
        description:
            "Elevated pieces designed to make your evening routine feel special.",
        bg: "bg-[#DDD8E2]",
        accent: "bg-[#C7B8CF]",
    },
    {
        id: 4,
        title: "Self Care",
        description:
            "Simple rituals and comforting essentials for moments of calm.",
        bg: "bg-[#E8E0D6]",
        accent: "bg-[#D7C8B5]",
    },
];

const CollectionsPage = () => {
    return (
        <main className="min-h-screen bg-[#FCFAF7]">

            {/* Header */}
            <section className="bg-[#F5EFEA]">
                <div className="mx-auto w-full max-w-[1280px] px-5 py-20 text-center sm:px-8 lg:px-10 lg:py-24">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        Curated for you
                    </p>

                    <h1 className="mt-4 font-['Playfair_Display'] text-5xl font-semibold text-[#292629] sm:text-6xl">
                        Collections
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6B6468] sm:text-base">
                        Explore thoughtfully curated collections designed to
                        bring beauty, comfort, and effortless elegance into
                        your everyday life.
                    </p>
                </div>
            </section>

            {/* Collections */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                        {collections.map((collection) => (
                            <article
                                key={collection.id}
                                className={`group relative min-h-[420px] overflow-hidden rounded-[2rem] ${collection.bg}`}
                            >
                                {/* Decorative Circle */}
                                <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full ${collection.accent} opacity-60 transition-transform duration-700 group-hover:scale-125`} />

                                <div className={`absolute -bottom-20 -left-20 h-64 w-64 rounded-full ${collection.accent} opacity-40 transition-transform duration-700 group-hover:scale-110`} />

                                {/* Product Visual */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-60 w-44 items-center justify-center rounded-[1.5rem] border border-white/60 bg-[#F8F3EF]/80 shadow-xl transition-transform duration-500 group-hover:scale-105 sm:h-64 sm:w-48">
                                        <div className="text-center">
                                            <span className="text-3xl text-[#4A3048]">
                                                ✦
                                            </span>

                                            <p className="mt-3 font-['Playfair_Display'] text-2xl font-semibold tracking-[0.1em] text-[#4A3048]">
                                                LUMORA
                                            </p>

                                            <p className="mt-1 text-[9px] tracking-[0.25em] text-[#8A7B80]">
                                                EVERYDAY, ELEVATED.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A3048]/80 via-[#4A3048]/30 to-transparent p-7 pt-24 sm:p-8 sm:pt-28">
                                    <div className="flex items-end justify-between gap-5">
                                        <div>
                                            <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-white sm:text-3xl">
                                                {collection.title}
                                            </h2>

                                            <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                                                {collection.description}
                                            </p>
                                        </div>

                                        <Link
                                            to="/shop"
                                            aria-label={`Explore ${collection.title}`}
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#4A3048] transition-all duration-300 hover:scale-105"
                                        >
                                            <ArrowUpRight
                                                size={18}
                                                strokeWidth={1.5}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}

                    </div>

                </div>
            </section>

            {/* Featured Collection */}
            <section className="bg-[#F5EFEA]">
                <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">

                    {/* Visual */}
                    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#DDD3DC] sm:min-h-[500px]">

                        {/* Decorative Circles */}
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C8B5C7] opacity-60" />

                        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#C4B0C3] opacity-50" />

                        {/* Product */}
                        <div className="relative flex h-72 w-52 items-center justify-center rounded-[1.5rem] border border-white/60 bg-[#F8F3EF] shadow-2xl transition-transform duration-500 hover:scale-105 sm:h-80 sm:w-56">

                            <div className="text-center">
                                <span className="text-4xl text-[#4A3048]">
                                    ✦
                                </span>

                                <p className="mt-4 font-['Playfair_Display'] text-3xl font-semibold tracking-[0.1em] text-[#4A3048]">
                                    LUMORA
                                </p>

                                <p className="mt-2 text-[9px] tracking-[0.3em] text-[#8A7B80]">
                                    SOFT GLOW
                                </p>
                            </div>
                        </div>

                        {/* Floating Label */}
                        <div className="absolute bottom-6 left-6 rounded-2xl border border-white/50 bg-white/70 px-5 py-4 backdrop-blur-md">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A5A83]">
                                Featured collection
                            </p>

                            <p className="mt-1 font-['Playfair_Display'] text-lg text-[#4A3048]">
                                Soft Glow
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-xl">

                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                            Featured collection
                        </p>

                        <h2 className="mt-4 font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#292629] sm:text-5xl">
                            Soft beauty,
                            <span className="block text-[#4A3048]">
                                effortlessly yours.
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-[#6B6468] sm:text-base">
                            Discover our Soft Glow collection, a thoughtful selection
                            of beauty essentials created to complement your natural
                            beauty and everyday rituals.
                        </p>

                        <Link
                            to="/shop"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#362336]"
                        >
                            Explore Soft Glow

                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </div>
                    
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-[#E9E2DA] bg-[#FCFAF7]">
                <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 py-20 text-center sm:px-8 lg:px-10">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        Find your essentials
                    </p>

                    <h2 className="mt-4 max-w-xl font-['Playfair_Display'] text-3xl font-semibold text-[#4A3048] sm:text-4xl">
                        Something beautiful for every moment.
                    </h2>

                    <Link
                        to="/shop"
                        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#362336]"
                    >
                        Explore Shop

                        <ArrowUpRight
                            size={17}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default CollectionsPage;