import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";

const shopLinks = [
    { name: "All Products", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "Skincare", path: "/shop" },
    { name: "Fragrance", path: "/shop" },
];

const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "#" },
    { name: "Shipping & Returns", path: "#" },
    { name: "Privacy Policy", path: "#" },
];

const Footer = () => {
    return (
        <footer className="bg-[#4A3048] text-white">

            {/* Main Footer */}
            <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <Reveal
                        duration={700}
                        className="lg:col-span-2"
                    >
                        <div>

                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2"
                            >
                                <span className="text-xl transition-transform duration-500 group-hover:rotate-90">
                                    ✦
                                </span>

                                <span className="font-['Playfair_Display'] text-2xl font-semibold tracking-[0.12em]">
                                    LUMORA
                                </span>
                            </Link>

                            <p className="mt-5 max-w-md text-sm leading-7 text-[#D9C4D5]">
                                Thoughtfully curated beauty and lifestyle essentials
                                designed to bring effortless elegance into your
                                everyday moments.
                            </p>

                            {/* Social Media */}
                            <div className="mt-7 flex items-center gap-3">

                                <a 
                                    href="#" 
                                    aria-label="Instagram"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#E9DDE7] transition-all duration-300 hover:bg-white hover:text-[#4A3048]"
                                >
                                    IG
                                </a>

                                <a 
                                    href="#" 
                                    aria-label="Facebook"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#E9DDE7] transition-all duration-300 hover:bg-white hover:text-[#4A3048]"
                                >
                                    FB
                                </a>

                                <a 
                                    href="#" 
                                    aria-label="Twitter"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#E9DDE7] transition-all duration-300 hover:bg-white hover:text-[#4A3048]"
                                >
                                    TW
                                </a>

                            </div>

                        </div>
                    </Reveal>

                    {/* Shop */}
                    <Reveal
                        delay={100}
                        duration={700}
                    >
                        <div>

                            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#D9C4D5]">
                                Shop
                            </h3>

                            <div className="mt-5 flex flex-col gap-3">
                            
                                {shopLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-sm text-[#F5EFEA] transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                            </div>

                        </div>
                    </Reveal>

                    {/* Company */}
                    <Reveal
                        delay={200}
                        duration={700}
                    >
                        <div>

                            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#D9C4D5]">
                                Company
                            </h3>

                            <div className="mt-5 flex flex-col gap-3">
                            
                                {companyLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-sm text-[#F5EFEA] transition-colors duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                            </div>

                        </div>
                    </Reveal>

                </div>

                {/* NewsLetter */}
                <Reveal
                    delay={300}
                    duration={700}
                >
                    <div className="mt-16 rounded-[1.5rem] border border-white/15 bg-white/5 p-6 transition-colors duration-500 hover:bg-white/[0.07] sm:p-8">

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D9C4D5]">
                                    Stay in the loop
                                </p>

                                <h3 className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-white">
                                    Get a little Lumora in your inbox.
                                </h3>
                            </div>

                            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">

                                <input 
                                    type="email"
                                    placeholder="Your email address"
                                    className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-[#CBB5C8] transition-all duration-300 focus:border-[#D9C4D5] focus:bg-white/15"
                                />

                                <button
                                    type="button"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#4A3048] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5EFEA] hover:shadow-lg"
                                >
                                    Subscribe

                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.5}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </button>

                            </div>

                        </div>

                    </div>
                </Reveal>

            </div>

            {/* Bottom Footer */}
            <Reveal duration={700}>
                <div className="border-t border-white/10">
            
                    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-5 py-6 text-xs text-[#CBB5C8] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

                        <p>
                            © 2026 LUMORA. All rights reserved.
                        </p>

                        <p>
                            Everyday, Elevated.
                        </p>

                    </div>
                </div>
            </Reveal>

        </footer>
    );
};

export default Footer;