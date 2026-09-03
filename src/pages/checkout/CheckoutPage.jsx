import { ArrowLeft, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import z from "zod";
import { useCart } from "../../context/CartContext";

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

const CheckoutPage = () => {
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

    return (
        <main className="min-h-screen bg-[#FCFAF7]">

            {/* Header */}
            <section className="border-b border-[#E9E2DA] bg-[#F5EFEA]">
                <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        Complete your order
                    </p>

                    <h1 className="mt-4 font-['Playfair_Display'] text-5xl font-semibold text-[#292629] sm:text-6xl">
                        Checkout
                    </h1>
                </div>
            </section>

            {/* Checkout */}
            <section className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">

                {cartItems.length === 0 ? (
                    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

                        <p className="text-4xl text-[#4A3048]">
                            ✦
                        </p>

                        <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-semibold text-[#4A3048]">
                            Your cart is empty.
                        </h2>

                        <p className="mt-3 max-w-md text-sm leading-6 text-[#8A7B80]">
                            Add something beautiful to your cart before
                            continuing to checkout.
                        </p>

                        <Link
                            to="/shop"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#362336] hover:shadow-lg"
                        >
                            <ArrowLeft size={17} />
                            Continue Shopping
                        </Link>

                    </div>
                ) : (
                    <form
                        onSubmit={handlePlaceOrder}
                        noValidate
                        className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]"
                    >
                        {/* Customer Information */}
                        <div className="rounded-[1.5rem] border border-[#E9E2DA] bg-white p-7 sm:p-9">

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8A5A83]">
                                        Your details
                                    </p>

                                    <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-[#4A3048]">
                                        Customer Information
                                    </h2>
                                </div>

                                <Lock
                                    size={19}
                                    strokeWidth={1.5}
                                    className="text-[#8A7B80]"
                                />
                            </div>

                            <div className="mt-8 space-y-5">

                                {/* Full Name */}
                                <div>
                                    <label 
                                        htmlFor="fullName" 
                                        className="text-sm font-medium text-[#292629]"
                                    >
                                        Full Name
                                    </label>

                                    <input 
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className={`mt-2 w-full rounded-xl border bg-[#FCFAF7] px-4 py-3 text-sm text-[#292629] outline-none transition-all placeholder:text-[#9B9095] focus:border-[#4A3048] ${
                                            errors.fullName
                                                ? "border-red-400"
                                                : "border-[#D8CEC7]"
                                        }`}
                                    />

                                    {errors.fullName && (
                                        <p className="mt-2 text-xs text-red-500">
                                            {errors.fullName}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-[#292629]"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={`mt-2 w-full rounded-xl border bg-[#FCFAF7] px-4 py-3 text-sm text-[#292629] outline-none transition-all placeholder:text-[#9B9095] focus:border-[#4A3048] ${
                                            errors.email
                                                ? "border-red-400"
                                                : "border-[#D8CEC7]"
                                        }`}
                                    />

                                    {errors.email && (
                                        <p className="mt-2 text-xs text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium text-[#292629]"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="08xxxxxxxxxx"
                                        className={`mt-2 w-full rounded-xl border bg-[#FCFAF7] px-4 py-3 text-sm text-[#292629] outline-none transition-all placeholder:text-[#9B9095] focus:border-[#4A3048] ${
                                            errors.phone
                                                ? "border-red-400"
                                                : "border-[#D8CEC7]"
                                        }`}
                                    />

                                    {errors.phone && (
                                        <p className="mt-2 text-xs text-red-500">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Address */}
                                <div>
                                    <label
                                        htmlFor="address"
                                        className="text-sm font-medium text-[#292629]"
                                    >
                                        Address
                                    </label>

                                    <textarea
                                        id="address"
                                        name="address"
                                        rows="4"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Your complete address"
                                        className={`mt-2 w-full resize-none rounded-xl border bg-[#FCFAF7] px-4 py-3 text-sm text-[#292629] outline-none transition-all placeholder:text-[#9B9095] focus:border-[#4A3048] ${
                                            errors.address
                                                ? "border-red-400"
                                                : "border-[#D8CEC7]"
                                        }`}
                                    />

                                    {errors.address && (
                                        <p className="mt-2 text-xs text-red-500">
                                            {errors.address}
                                        </p>
                                    )}
                                </div>

                                {/* City & Postal Code */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                    {/* City */}
                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="text-sm font-medium text-[#292629]"
                                        >
                                            City
                                        </label>

                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Your city"
                                            className={`mt-2 w-full rounded-xl border bg-[#FCFAF7] px-4 py-3 text-sm text-[#292629] outline-none transition-all placeholder:text-[#9B9095] focus:border-[#4A3048] ${
                                                errors.city
                                                    ? "border-red-400"
                                                    : "border-[#D8CEC7]"
                                            }`}
                                        />

                                        {errors.city && (
                                            <p className="mt-2 text-xs text-red-500">
                                                {errors.city}
                                            </p>
                                        )}
                                    </div>

                                    {/* Postal Code */}
                                    <div>
                                        <label
                                            htmlFor="postalCode"
                                            className="text-sm font-medium text-[#292629]"
                                        >
                                            Postal Code
                                        </label>

                                        <input
                                            id="postalCode"
                                            name="postalCode"
                                            type="text"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            placeholder="621xx"
                                            className={`mt-2 w-full rounded-xl border bg-[#FCFAF7] px-4 py-3 text-sm text-[#292629] outline-none transition-all placeholder:text-[#9B9095] focus:border-[#4A3048] ${
                                                errors.postalCode
                                                    ? "border-red-400"
                                                    : "border-[#D8CEC7]"
                                            }`}
                                        />

                                        {errors.postalCode && (
                                            <p className="mt-2 text-xs text-red-500">
                                                {errors.postalCode}
                                            </p>
                                        )}
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* Order Summary */}
                        <aside className="h-fit rounded-[1.5rem] bg-[#F5EFEA] p-7">

                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8A5A83]">
                                Your selection
                            </p>

                            <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-semibold text-[#4A3048]">
                                Order Summary
                            </h2>

                            {/* Products */}
                            <div className="mt-6 space-y-4">
                                {cartItems.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="flex items-center justify-between gap-4"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-[#4A3048]">
                                                {item.name}
                                            </p>

                                            <p className="mt-1 text-xs text-[#8A7B80]">
                                                Qty {item.quantity}
                                            </p>
                                        </div>

                                        <p className="shrink-0 text-sm font-medium text-[#292629]">
                                            $
                                            {(
                                                Number(
                                                    item.price.replace("$", "")
                                                ) * item.quantity
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="my-6 h-px bg-[#D8CEC7]" />

                            {/* Subtotal */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-[#6B6468]">
                                    Subtotal
                                </span>

                                <span className="text-sm font-medium text-[#292629]">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            {/* Shipping */}
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-sm text-[#6B6468]">
                                    Shipping
                                </span>

                                <span className="text-sm font-medium text-[#292629]">
                                    ${shipping.toFixed(2)}
                                </span>
                            </div>

                            <div className="my-5 h-px bg-[#D8CEC7]" />

                            {/* Total */}
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-[#292629]">
                                    Total
                                </span>

                                <span className="text-xl font-semibold text-[#4A3048]">
                                    ${grandTotal.toFixed(2)}
                                </span>
                            </div>

                            {/* Place Order */}
                            <button
                                type="submit"
                                className="mt-7 w-full rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#362336] hover:shadow-lg"
                            >
                                Place Order
                            </button>

                            <Link
                                to="/cart"
                                className="mt-4 flex items-center justify-center gap-2 text-sm text-[#6B6468] transition-colors hover:text-[#4A3048]"
                            >
                                <ArrowLeft size={15} />
                                Back to Cart
                            </Link>

                        </aside>

                    </form>
                )}

            </section>
        </main>
    );
};

export default CheckoutPage;