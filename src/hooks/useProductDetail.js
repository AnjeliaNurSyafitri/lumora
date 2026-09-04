import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const useProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [quantity, setQuantity] = useState(1);

    const isWishlisted = product
        ? isInWishlist(product.id)
        : false;

    const decreaseQuantity = () => {
        setQuantity((current) =>
            Math.max(1, current - 1)
        );
    };

    const increaseQuantity = () => {
        setQuantity((current) => current + 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const handleToggleWishlist = () => {
        toggleWishlist(product);
    };

    return {
        product,
        quantity,
        isWishlisted,
        decreaseQuantity,
        increaseQuantity,
        handleAddToCart,
        handleToggleWishlist,
    };
};

export default useProductDetail;