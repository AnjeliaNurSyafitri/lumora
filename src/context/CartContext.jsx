import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem("lumora-cart");

            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Failed to load cart:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(
                "lumora-cart",
                JSON.stringify(cartItems)
            );
        } catch (error) {
            console.error("Failed to save cart:", error);
        }
    }, [cartItems]);


    const addToCart = (product, quantity = 1) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + quantity,
                          }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity,
                },
            ];
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? { 
                        ...item, 
                        quantity: Math.max(1, quantity),
                    }
                    : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== productId
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce(
        (total, item) => 
            total + 
            Number(item.price.replace("$", "")) * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                cartTotal,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};