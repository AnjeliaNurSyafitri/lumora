import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#FCFAF7]/95 backdrop-blur-sm border-b border-[#E9E2DA]">
            <nav className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-[#4A3048]"
                    >
                        <span className="text-xl">✦</span>

                        <span className="font-['Playfair_Display'] text-2xl font-semibold tracking-[0.12em]">
                            LUMORA
                        </span>
                    </Link>

                    {/* Dekstop Menu */}
                    <div className="hidden md:flex items-center gap-9">
                        <Link
                            to="/"
                            className="text-sm text-[#292629] hover:text-[#4A3048] transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/shop"
                            className="text-sm text-[#292629] hover:text-[#4A3048] transition-colors"
                        >
                            Shop
                        </Link>

                        <Link
                            to="/collections"
                            className="text-sm text-[#292629] hover:text-[#4A3048] transition-colors"
                        >
                            Collections
                        </Link>

                        <Link
                            to="/about"
                            className="text-sm text-[#292629] hover:text-[#4A3048] transition-colors"
                        >
                            About
                        </Link>
                    </div>

                    {/* Dekstop Actions */}
                    <div className="hidden md:flex items-center gap-5">
                        <button 
                            type="button"
                            className="text-[#292629] hover:text-[#4A3048] transition-colors"
                            aria-label="Wishlist"
                        >
                            <Heart size={20} strokeWidth={1.6} />
                        </button>

                        <button 
                            type="button"
                            className="text-[#292629] hover:text-[#4A3048] transition-colors"
                            aria-label="Shopping cart"
                        >
                            <ShoppingBag size={20} strokeWidth={1.6} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        type="button"
                        className="md:hidden text-[#292629]"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={24} strokeWidth={1.6} />
                        ) : (
                            <Menu size={24} strokeWidth={1.6} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-[#E9E2DA] py-5">
                        <div className="flex flex-col gap-5">

                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm text-[#292629]"
                            >
                                Home
                            </Link>

                            <Link
                                to="/shop"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm text-[#292629]"
                            >
                                Shop
                            </Link>

                            <Link
                                to="/collections"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm text-[#292629]"
                            >
                                Collections
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm text-[#292629]"
                            >
                                About
                            </Link>

                            <div className="flex items-center gap-5 pt-2 border-t border-[#E9E2DA]">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <Heart size={18} strokeWidth={1.6} />
                                    Wishlist
                                </button>

                                <button
                                    type="button"
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <ShoppingBag size={18} strokeWidth={1.6} />
                                    Cart
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;