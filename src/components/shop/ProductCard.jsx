import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
    return (
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
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#4A3048] backdrop-blur-sm transition-all duration-300 hover:bg-white"
                >
                    <Heart
                        size={18}
                        strokeWidth={1.5}
                    />
                </button>

                {/* Product Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-52 w-32 items-center justify-center rounded-[1.25rem] border border-white/60 bg-[#F8F3EF]/80 shadow-lg transition-transform duration-500 group-hover:scale-105 sm:h-56">
                        <div className="text-center">
                            <span className="text-2xl text-[#4A3048]">
                                ✦
                            </span>

                            <p className="mt-2 font-['Playfair_Display'] text-lg font-semibold tracking-[0.1em] text-[#4A3048]">
                                LUMORA
                            </p>
                        </div>
                    </div>
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
    );
};

export default ProductCard;