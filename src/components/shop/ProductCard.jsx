import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import Reveal from "../common/Reveal";

const ProductCard = ({ product }) => {
    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();

    const isWishlisted = isInWishlist(product.id);

    return (
        <Reveal
            delay={product.id * 80}
            duration={700}
            className="h-full"
        >
            <article className="group h-full transition-transform duration-500 hover:-translate-y-1">

                {/* Product Image */}
                <div 
                    className={`relative block aspect-[4/5] overflow-hidden rounded-[1.5rem] ${product.bg}`}
                >
                    {/* Soft Overlay */}
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.03]" />

                    {/* Link Product */}
                    <Link 
                        to={`/product/${product.id}`}
                        className="absolute inset-0"
                    >
                        {/* Decorative Shape */}
                        <div 
                            className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${product.accent} opacity-60 transition-all duration-700 ease-out group-hover:scale-150 group-hover:rotate-12`}
                        />

                        {/* Second Decorative Shape */}
                        <div 
                            className={`absolute -bottom-16 -left-16 h-40 w-40 rounded-full ${product.accent} opacity-20 transition-all duration-700 ease-out group-hover:scale-125`} 
                        />

                        {/* Product Image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img 
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                            />
                        </div>

                        {/* Quick Add */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                            <button
                                type="button"
                                className="w-full rounded-full bg-[#4A3048] px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#362336] hover:shadow-xl"
                            >
                                Quick Add
                            </button>
                        </div>
                    </Link>

                    {/* Wishlist */}
                    <button 
                        type="button"
                        onClick={() => toggleWishlist(product)}
                        aria-label={
                            isWishlisted
                                ? `Remove ${product.name} from wishlist`
                                : `Add ${product.name} to wishlist`
                        }
                        className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white ${
                            isWishlisted
                                ? "bg-[#4A3048] text-white shadow-lg"
                                : "bg-white/70 text-[#4A3048]"
                        }`}
                    >
                        <Heart
                            size={18}
                            strokeWidth={1.5}
                            fill={isWishlisted ? "currentColor" : "none"}
                            className="transition-transform duration-300 active:scale-75"
                        />
                    </button>
                </div>

                {/* Product Information */}
                <div className="px-1 pt-4 transition-transform duration-500 group-hover:translate-y-0.5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8A7B80]">
                        {product.category}
                    </p>

                    <div className="mt-1 flex items-start justify-between gap-3">
                        <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#4A3048] transition-colors duration-300 group-hover:text-[#6B4566]">
                            {product.name}
                        </h3>

                        <p className="shrink-0 text-sm font-medium text-[#292629]">
                            {product.price}
                        </p>
                    </div>
                </div>
            </article>
        </Reveal>
    );
};

export default ProductCard;