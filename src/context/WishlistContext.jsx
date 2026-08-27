import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const toggleWishlist = (product) => {
        setWishlistItems((currentItems) => {
            const isAlreadyWishlisted = currentItems.some(
                (item) => item.id === product.id
            );

            if (isAlreadyWishlisted) {
                return currentItems.filter(
                    (item) => item.id !== product.id
                );
            }

            return [...currentItems, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        );
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some((item) => item.id === productId);
    };

    const wishlistCount = wishlistItems.length;

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                toggleWishlist,
                removeFromWishlist,
                isInWishlist,
                wishlistCount,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    return useContext(WishlistContext);
};