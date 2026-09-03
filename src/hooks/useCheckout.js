import { useState } from "react";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { useCart } from "../context/CartContext";

const checkoutSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, "Full name must be at least 2 characters."),

    email: z
        .string()
        .trim()
        .min(1, "Email is required.")
        .email("Please enter a valid email address."),

    phone: z
        .string()
        .trim()
        .min(1, "Phone number is required.")
        .regex(/^\d{10,15}$/, "Phone number must contain 10-15 digits."),

    address: z
        .string()
        .trim()
        .min(5, "Address must be at least 5 characters."),

    city: z
        .string()
        .trim()
        .min(2, "City is required."),

    postalCode: z
        .string()
        .trim()
        .regex(/^\d{5}$/, "Postal code must contain 5 digits."),
});

const useCheckout = () => {
    const {
        cartItems,
        cartTotal,
        clearCart,
    } = useCart();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: "",
        }));
    };

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        const result = checkoutSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                fullName: fieldErrors.fullName?.[0] || "",
                email: fieldErrors.email?.[0] || "",
                phone: fieldErrors.phone?.[0] || "",
                address: fieldErrors.address?.[0] || "",
                city: fieldErrors.city?.[0] || "",
                postalCode: fieldErrors.postalCode?.[0] || "",
            });

            return;
        }

        clearCart();
        navigate("/order-success");
    };

    const shipping = cartItems.length > 0 ? 5 : 0;
    const grandTotal = cartTotal + shipping;

    return {
        cartItems,
        cartTotal,
        formData,
        errors,
        shipping,
        grandTotal,
        handleChange,
        handlePlaceOrder,
    };
};

export default useCheckout;