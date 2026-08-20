import { ArrowUpRight } from "lucide-react";

const categories = [
    {
        name: "Skincare",
        description: "Thoughtful care for your everyday ritual.",
        number: "01",
    },
    {
        name: "Makeup",
        description: "Effortless beauty for every moment.",
        number: "02",
    },
    {
        name: "Fragrance",
        description: "Scents that become part of your story.",
        number: "03",
    },
    {
        name: "Body Care",
        description: "Simple rituals for softer moments.",
        number: "04",
    },
];

const CategorySection = () => {
    return (
        <section className="bg-[#FCFAF7] py-20 sm:py-24">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

                {/* Section Heading */}
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                            Explore
                        </p>

                        <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#292629] sm:text-5xl">
                            Curated for
                            <span className="text-[#4A3048]"> everyday living.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-[#6B6468] sm:text-right">
                        Discover thoughtfully selected essentials designed
                        to complement your everyday rituals.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <div 
                            key={category.number}
                            className="group relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[#E9E2DA] bg-[#F5EFEA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Decorative Circle */}
                            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D9C4D5]/50 transition-transform duration-500 group-hover:scale-125" />

                            <div className="relative flex h-full flex-col justify-between">

                                {/* Number */}
                                <div className="flex items-start justify-between">
                                    <span className="text-xs tracking-[0.2em] text-[#8A7B80]">
                                        {category.number}
                                    </span>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CEC7] bg-white/50 text-[#4A3048] transition-all duration-300 group-hover:bg-[#4A3048] group-hover:text-white">
                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#4A3048]">
                                        {category.name}
                                    </h3>

                                    <p className="mt-2 max-w-[220px] text-sm leading-6 text-[#6B6468]">
                                        {category.description}
                                    </p>

                                    <div className="mt-5 h-px w-10 bg-[#CBB5C8] transition-all duration-300 group-hover:w-16" />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CategorySection;