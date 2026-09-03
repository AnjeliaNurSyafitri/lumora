import { ArrowLeft, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <main className="min-h-screen bg-[#FCFAF7]">
                <div className="mx-auto flex min-h-[70vh] max-w-[1280px] flex-col items-center justify-center px-5 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        Product not found
                    </p>

                    <h1 className="mt-4 font-['Playfair_Display'] text-4xl font-semibold text-[#4A3048]">
                        We couldn't find that product.
                    </h1>

                    <Link
                        to="/shop"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#362336]"
                    >
                        <ArrowLeft size={17} />
                        Back to Shop
                    </Link>
                </div>
            </main>
        );
    }

    const isWishlisted = isInWishlist(product.id);

    return (
        <main className="min-h-screen bg-[#FCFAF7]">

            {/* Breadcrumb */}
            <div className="mx-auto w-full max-w-[1280px] px-5 pt-8 sm:px-8 lg:px-10">
                <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 text-sm text-[#8A7B80] transition-colors hover:text-[#4A3048]"
                >
                    <ArrowLeft size={16} strokeWidth={1.5} />
                    Back to Shop
                </Link>
            </div>

            {/* Product */}
            <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-16">

                {/* Product Visual */}
                <div
                    className={`relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[2rem] ${product.bg} sm:min-h-[620px]`}
                >
                    {/* Decorative Circle */}
                    <div
                        className={`absolute -right-20 -top-20 h-72 w-72 rounded-full ${product.accent} opacity-60`}
                    />

                    <div
                        className={`absolute -bottom-24 -left-24 h-80 w-80 rounded-full ${product.accent} opacity-40`}
                    />

                    {/* Product */}
                    <div className="relative flex h-80 w-56 items-center justify-center rounded-[1.5rem] border border-white/60 bg-[#F8F3EF]/90 shadow-2xl sm:h-96 sm:w-64">
                        <div className="text-center">
                            <span className="text-4xl text-[#4A3048]">
                                ✦
                            </span>

                            <p className="mt-4 font-['Playfair_Display'] text-3xl font-semibold tracking-[0.1em] text-[#4A3048]">
                                LUMORA
                            </p>

                            <p className="mt-2 max-w-[150px] text-[9px] leading-4 tracking-[0.2em] text-[#8A7B80]">
                                {product.name.toUpperCase()}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-center">

                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8A5A83]">
                        {product.category}
                    </p>

                    <h1 className="mt-4 font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#292629] sm:text-5xl">
                        {product.name}
                    </h1>

                    <p className="mt-5 text-2xl font-medium text-[#4A3048]">
                        {product.price}
                    </p>

                    <div className="my-8 h-px bg-[#E9E2DA]" />

                    <p className="text-sm leading-7 text-[#6B6468] sm:text-base">
                        A thoughtfully selected Lumora essential designed to
                        bring effortless beauty and comfort into your everyday
                        routine. Simple, elegant, and made to become part of
                        your daily ritual.
                    </p>

                    {/* Quantity */}
                    <div className="mt-8">
                        <p className="text-sm font-medium text-[#292629]">
                            Quantity
                        </p>

                        <div className="mt-3 flex w-fit items-center rounded-full border border-[#D8CEC7] bg-white">

                            <button
                                type="button"
                                onClick={() =>
                                    setQuantity((current) =>
                                        Math.max(1, current - 1)
                                    )
                                }
                                className="flex h-11 w-11 items-center justify-center text-[#4A3048] transition-colors hover:bg-[#F5EFEA]"
                                aria-label="Decrease quantity"
                            >
                                <Minus size={16} />
                            </button>

                            <span className="w-10 text-center text-sm font-medium text-[#292629]">
                                {quantity}
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    setQuantity((current) => current + 1)
                                }
                                className="flex h-11 w-11 items-center justify-center text-[#4A3048] transition-colors hover:bg-[#F5EFEA]"
                                aria-label="Increase quantity"
                            >
                                <Plus size={16} />
                            </button>

                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                        <button
                            type="button"
                            onClick={() => addToCart(product, quantity)}
                            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#362336]"
                        >
                            <ShoppingBag
                                size={17}
                                strokeWidth={1.5}
                            />

                            Add to Cart
                        </button>

                        {/* Wishlist */}
                        <button
                            type="button"
                            onClick={() => toggleWishlist(product)}
                            aria-label={
                                isWishlisted
                                    ? `Remove ${product.name} from wishlist`
                                    : `Add ${product.name} to wishlist`
                            }
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 ${
                                isWishlisted
                                    ? "border-[#292629] bg-white text-[#292629] shadow-sm"
                                    : "border-[#D8CEC7] bg-white text-[#4A3048] hover:border-[#4A3048] hover:bg-[#F5EFEA]"
                            }`}
                        >
                            <Heart
                                size={19}
                                strokeWidth={1.5}
                                fill={isWishlisted ? "currentColor" : "none"}
                                className="transition-transform duration-300 active:scale-75"
                            />
                        </button>

                    </div>

                </div>
            </section>

        </main>
    );
};

export default ProductDetailPage;