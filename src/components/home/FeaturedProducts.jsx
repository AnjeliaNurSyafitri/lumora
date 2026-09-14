import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import { products } from "../../data/products";

const FeaturedProducts = () => {
    return (
        <section className="bg-[#FCFAF7] py-20 sm:py-24">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

                {/* Section Heading */}
                <Reveal>
                    <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                                Our Selection
                            </p>

                            <h2 className="font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#292629] sm:text-5xl">
                                Featured
                                <span className="text-[#4A3048]"> essentials.</span>
                            </h2>
                        </div>

                        <Link
                            to="/shop"
                            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-[#4A3048] transition-colors duration-300 hover:text-[#6B4566]"
                        >
                            View all products

                            <ArrowRight
                                size={17}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </Reveal>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.slice(0, 4).map((product, index) => (
                        <Reveal
                            key={product.id}
                            delay={index * 120}
                        >
                            <article className="group">

                                {/* Product Image */}
                                <div 
                                    className={`relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ${product.bg}`} 
                                >
                                    {/* Decorative Shape */}
                                    <div 
                                        className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${product.accent} opacity-60 transition-transform duration-500 group-hover:scale-125`} 
                                    />

                                    {/* Wishlist */}
                                    <button
                                        type="button"
                                        aria-label={`ADD ${product.name} to wishlist`}
                                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#4A3048] backdrop-blur-sm transition-all duration-300 hover:bg-white"
                                    >
                                        <Heart
                                            size={18}
                                            strokeWidth={1.5}
                                        />
                                    </button>

                                    {/* Product Image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="h-full w-full object-cover" 
                                        />
                                    </div>

                                    {/* Quick Add */}
                                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <button
                                            type="button"
                                            className="w-full rounded-full bg-[#4A3048] px-5 py-3 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#362336]"
                                        >
                                            Quick Add
                                        </button>
                                    </div>
                                </div>

                                {/* Product Information */}
                                <div className="px-1 pt-4">
                                    <p className="text-xs uppercase tracking-[0.18em] text-[#8A7B80]">
                                        {product.category}
                                    </p>

                                    <div className="mt-1 flex items-start justify-between gap-3">
                                        <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#4A3048]">
                                            {product.name}
                                        </h3>

                                        <p className="shrink-0 text-sm font-medium text-[#292629]">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;