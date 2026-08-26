import { Search } from "lucide-react";
import { useState } from "react";
import ProductCard from "../../components/shop/ProductCard";
import { products } from "../../data/products";

const categories = [
    "All",
    "Skincare",
    "Makeup",
    "Fragrance",
    "Body Care",
];

const ShopPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-[#FCFAF7]">

            {/* Header */}
            <section className="border-b border-[#E9E2DA] bg-[#F5EFEA]">
                <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        The Collection
                    </p>

                    <h1 className="font-['Playfair_Display'] text-5xl font-semibold text-[#292629] sm:text-6xl">
                        Shop
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B6468] sm:text-base">
                        Explore our thoughtfully curated collection of beauty
                        and lifestyle essentials designed for everyday moments.
                    </p>
                </div>
            </section>

            {/* Products */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

                    {/* Toolbar */}
                    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setSelectedCategory(category)}
                                    className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                                        selectedCategory === category
                                            ? "bg-[#4A3048] text-white"
                                            : "border border-[#D8CEC7] text-[#6B6468] hover:border-[#4A3048] hover:text-[#4A3048]"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:max-w-xs">
                            <Search
                                size={18}
                                strokeWidth={1.5}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7B80]"
                            />

                            <input 
                                type="text" 
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search products..."
                                className="w-full rounded-full border border-[#D8CEC7] bg-white py-3 pl-11 pr-5 text-sm text-[#292629] outline-none placeholder:text-[#9B9095] focus:border-[#4A3048]"
                            />
                        </div>
                    </div>

                    {/* Result */}
                    <div className="mb-6">
                        <p className="text-sm text-[#8A7B80]">
                            {filteredProducts.length} products
                        </p>
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <p className="font-['Playfair_Display'] text-2xl text-[#4A3048]">
                                No products found.
                            </p>

                            <p className="mt-2 text-sm text-[#8A7B80]">
                                Try another search or category.
                            </p>
                        </div>

                    )}

                </div>
            </section>

        </main>
    );
};

export default ShopPage;