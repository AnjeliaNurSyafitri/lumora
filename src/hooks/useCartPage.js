import { useCart } from "../context/CartContext";

const useCartPage = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
    } = useCart();

    const decreaseQuantity = (item) => {
        updateQuantity(
            item.id,
            item.quantity - 1
        );
    };

    const increaseQuantity = (item) => {
        updateQuantity(
            item.id,
            item.quantity + 1
        );
    };

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    return {
        cartItems,
        cartTotal,
        decreaseQuantity,
        increaseQuantity,
        handleRemove,
    };
};

export default useCartPage;