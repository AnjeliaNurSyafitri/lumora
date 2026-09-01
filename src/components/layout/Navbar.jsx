import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <header className="sticky top-0 z-50 border-b border-[#E9E2DA] bg-[#FCFAF7]/95 backdrop-blur-sm">

            <nav className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="navbar-logo group flex items-center gap-2 text-[#4A3048]"
                    >
                        <span className="text-xl transition-transform duration-500 group-hover:rotate-90">
                            ✦
                        </span>

                        <span className="font-['Playfair_Display'] text-2xl font-semibold tracking-[0.12em]">
                            LUMORA
                        </span>
                    </Link>

                    {/* Dekstop Menu */}
                    <div className="hidden md:flex items-center gap-9">
                        
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="navbar-link relative text-sm text-[#292629] transition-colors duration-300 hover:text-[#4A3048]"
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>

                    {/* Dekstop Actions */}
                    <div className="hidden md:flex items-center gap-5">

                        {/* Wishlist */}
                        <Link 
                            to="/wishlist"
                            className="text-[#292629] hover:text-[#4A3048] transition-colors duration-300"
                            aria-label="Wishlist"
                        >
                            <Heart 
                                size={20} 
                                strokeWidth={1.6} 
                                className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                            />
                        </Link>
                        
                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="group flex items-center gap-2 text-sm text-[#292629] hover:text-[#4A3048] transition-colors duration-300"
                            aria-label="Shopping cart"
                        >
                            <ShoppingBag 
                                size={20} 
                                strokeWidth={1.6} 
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />

                            Cart

                            {cartCount > 0 && (
                                <span 
                                    key={cartCount}
                                    className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#4A3048] px-1 text-[9px] font-medium text-white"
                                >
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        className="group text-[#292629] transition-colors duration-300 hover:text-[#4A3048] md:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? (
                            <X 
                                size={24} 
                                strokeWidth={1.6} 
                                className="transition-transform duration-300 group-hover:rotate-90"
                            />
                        ) : (
                            <Menu 
                                size={24} 
                                strokeWidth={1.6} 
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        )}
                    </button>

                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu border-t border-[#E9E2DA] py-5 md:hidden">

                        <div className="flex flex-col gap-5">

                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="mobile-nav-item text-sm text-[#292629] transition-colors duration-300 hover:text-[#4A3048]"
                                    style={{
                                        animationDelay: `${index * 70}ms`,
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Actions */}
                            <div className="flex items-center gap-5 pt-4 border-t border-[#E9E2DA]">

                                <Link
                                    to="/wishlist"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="mobile-nav-item flex items-center gap-2 text-sm text-[#292629] hover:text-[#4A3048] transition-colors duration-300"
                                    style={{
                                        animationDelay: "280ms",
                                    }}
                                >
                                    <Heart size={18} strokeWidth={1.6} />
                                    Wishlist
                                </Link>

                                <Link
                                    to="/cart"
                                    className="mobile-nav-item relative text-[#292629] hover:text-[#4A3048] transition-colors duration-300"
                                    aria-label="Shopping cart"
                                    style={{
                                        animationDelay: "350ms",
                                    }}
                                >
                                    <ShoppingBag size={20} strokeWidth={1.6} />
                                    
                                    {cartCount > 0 && (
                                        <span className="cart-badge absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#4A3048] px-1 text-[9px] font-medium text-white">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>

                            </div>

                        </div>

                    </div>
                )}

            </nav>
        </header>
    );
};

export default Navbar;