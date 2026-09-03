import { useMemo, useState } from "react";
import { products } from "../data/products";

const useShop = () => {
    const categories = [
        "All",
        "Skincare",
        "Fragrance",
        "Body Care",
        "Makeup",
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                selectedCategory === "All" ||
                product.category === selectedCategory;

            const matchesSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, search]);

    return {
        categories,
        selectedCategory,
        setSelectedCategory,
        search,
        setSearch,
        filteredProducts,
    };
};

export default useShop;