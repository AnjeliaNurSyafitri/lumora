import { Check, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
    return (
        <main className="min-h-screen bg-[#FCFAF7]">
            <section className="flex min-h-[75vh] w-full items-center justify-center px-5 py-20 sm:px-8 lg:px-10">
                <div className="w-full max-w-3xl text-center">

                    {/* Success Icon */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F5EFEA] text-[#4A3048]">
                        <Check size={32} strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <p className="mt-7 text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        Order Confirmed
                    </p>

                    <h1 className="mt-4 font-['Playfair_Display'] text-4xl font-semibold text-[#4A3048] sm:text-5xl">
                        Thank You for Your Order.
                    </h1>

                    <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#6B6468] sm:text-base">
                        Your order has been successfully placed. We'll make
                        sure your Lumora essentials are prepared with care.
                    </p>

                    {/* Order Info */}
                    <div className="mx-auto mt-10 max-w-md rounded-[1.5rem] border border-[#E9E2DA] bg-white p-6 text-left">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5EFEA] text-[#4A3048]">
                                <ShoppingBag
                                    size={18}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-[#8A7B80]">
                                    Order Number
                                </p>

                                <p className="mt-1 text-sm font-medium text-[#292629]">
                                    #LUM-2026-001
                                </p>
                            </div>
                        </div>

                        <div className="my-5 h-px bg-[#E9E2DA]" />

                        <p className="text-sm leading-6 text-[#6B6468]">
                            A confirmation has been prepared for your order.
                            Thank you for choosing LUMORA.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            to="/shop"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#362336]"
                        >
                            Continue Shopping

                            <ArrowRight
                                size={17}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/"
                            className="rounded-full border border-[#D8CEC7] px-7 py-3.5 text-sm font-medium text-[#4A3048] transition-colors duration-300 hover:bg-[#F5EFEA]"
                        >
                            Back to Home
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default OrderSuccessPage;