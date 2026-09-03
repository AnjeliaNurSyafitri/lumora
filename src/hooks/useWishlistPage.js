import { useWishlist } from "../context/WishlistContext";

const useWishlistPage = () => {
    const {
        wishlistItems,
        removeFromWishlist,
    } = useWishlist();

    const handleRemove = (productId) => {
        removeFromWishlist(productId);
    };

    return {
        wishlistItems,
        handleRemove,
    };
};

export default useWishlistPage;