import { ArrowLeft, Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

const WishlistPage = () => {
    const {
        wishlistItems,
        removeFromWishlist,
    } = useWishlist();

    return (
        <main className="min-h-screen bg-[#FCFAF7]">

            {/* Header */}
            <section className="border-b border-[#E9E2DA] bg-[#F5EFEA]">
                <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        Your favorites
                    </p>

                    <h1 className="mt-4 font-['Playfair_Display'] text-5xl font-semibold text-[#292629] sm:text-6xl">
                        Wishlist
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B6468] sm:text-base">
                        Keep the pieces you love close and come back to them
                        whenever you're ready.
                    </p>
                </div>
            </section>

            {/* Wishlist */}
            <section className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">

                {wishlistItems.length === 0 ? (
                    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

                        <Heart
                            size={42}
                            strokeWidth={1.3}
                            className="text-[#4A3048]"
                        />

                        <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-semibold text-[#4A3048]">
                            Your wishlist is empty.
                        </h2>

                        <p className="mt-3 max-w-md text-sm leading-6 text-[#8A7B80]">
                            Save the products you love and they'll appear here.
                        </p>

                        <Link
                            to="/shop"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#362336]"
                        >
                            <ArrowLeft size={17} />
                            Explore Products
                        </Link>

                    </div>
                ) : (
                    <>
                        {/* Result */}
                        <div className="mb-8">
                            <p className="text-sm text-[#8A7B80]">
                                {wishlistItems.length}{" "}
                                {wishlistItems.length === 1
                                    ? "product"
                                    : "products"}{" "}
                                saved
                            </p>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                            {wishlistItems.map((product) => (
                                <article
                                    key={product.id}
                                    className="group"
                                >
                                    {/* Product Image */}
                                    <div 
                                        className={`relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ${product.bg}`}
                                    >
                                        {/* Decorative Shape */}
                                        <div 
                                            className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${product.accent} opacity-60 transition-transform duration-500 group-hover:scale-125`} 
                                        />

                                        {/* Product Link */}
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="absolute inset-0"
                                        >
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
                                        </Link>

                                        {/* Remove Wishlist */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeFromWishlist(product.id)
                                            }
                                            aria-label={`Remove ${product.name} from wishlist`}
                                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#4A3048] backdrop-blur-sm transition-all duration-300 hover:bg-[#4A3048] hover:text-white"
                                        >
                                            <Trash2
                                                size={17}
                                                strokeWidth={1.5}
                                            />
                                        </button>
                                    </div>

                                    {/* Product Information */}
                                    <div className="px-1 pt-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-[#8A7B80]">
                                            {product.category}
                                        </p>

                                        <div className="mt-1 flex items-start justify-between gap-3">
                                            <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#4A3048]">
                                                {product.name}
                                            </h2>

                                            <p className="shrink-0 text-sm font-medium text-[#292629]">
                                                {product.price}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}

            </section>
        </main>
    );
};

export default WishlistPage;