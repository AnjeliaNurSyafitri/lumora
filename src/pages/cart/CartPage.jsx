import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
    } = useCart();

    return (
        <main className="min-h-screen bg-[#FCFAF7]">

            {/* Header */}
            <section className="border-b border-[#E9E2DA] bg-[#F5EFEA]">
                <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8A5A83]">
                        Your selection
                    </p>

                    <h1 className="mt-4 font-['Playfair_Display'] text-5xl font-semibold text-[#292629] sm:text-6xl">
                        Your Cart
                    </h1>
                </div>
            </section>

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
                            Discover something beautiful and add it to your
                            everyday collection.
                        </p>

                        <Link
                            to="/shop"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#362336]"
                        >
                            <ArrowLeft size={17} />
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">

                        {/* Items */}
                        <div className="space-y-5">
                            {cartItems.map((item) => (
                                <article
                                    key={item.id}
                                    className="flex flex-col gap-5 rounded-[1.5rem] border border-[#E9E2DA] bg-white p-5 sm:flex-row sm:items-center"
                                >
                                    {/* Product */}
                                    <div 
                                        className={`flex h-32 w-full shrink-0 items-center justify-center rounded-2xl ${item.bg} sm:w-28`}
                                    >
                                        <div className="text-center">
                                            <span className="text-xl text-[#4A3048]">
                                                ✦
                                            </span>

                                            <p className="mt-1 font-['Playfair_Display'] text-sm font-semibold tracking-[0.08em] text-[#4A3048]">
                                                LUMORA
                                            </p>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1">
                                        <p className="text-xs uppercase tracking-[0.18em] text-[#8A7B80]">
                                            {item.category}
                                        </p>

                                        <h2 className="mt-1 font-['Playfair_Display'] text-xl font-semibold text-[#4A3048]">
                                            {item.name}
                                        </h2>

                                        <p className="mt-2 text-sm font-medium text-[#292629]">
                                            {item.price}
                                        </p>
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex items-center justify-between gap-5 sm:flex-col">
                                        <div className="flex items-center rounded-full border border-[#D8CEC7]">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity - 1
                                                    )
                                                }
                                                className="flex h-9 w-9 items-center justify-center text-[#4A3048]"
                                            >
                                                <Minus size={14} />
                                            </button>

                                            <span className="w-8 text-center text-sm">
                                                {item.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity + 1
                                                    )
                                                }
                                                className="flex h-9 w-9 items-center justify-center text-[#4A3048]"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => 
                                                removeFromCart(item.id)
                                            }
                                            className="text-[#8A7B80] transition-colors hover:text-[#4A3048]"
                                            aria-label={`Remove ${item.name}`}
                                        >
                                            <Trash2 size={18} strokeWidth={1.5} />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Summary */}
                        <aside className="h-fit rounded-[1.5rem] bg-[#F5EFEA] p-7">
                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8A5A83]">
                                Order summary
                            </p>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-sm text-[#6B6468]">
                                    Subtotal
                                </span>

                                <span className="text-lg font-medium text-[#4A3048]">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <div className="my-5 h-px bg-[#D8CEC7]" />

                            <Link
                                to="/checkout"
                                className="flex w-full items-center justify-center rounded-full bg-[#4A3048] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#362336]"
                            >
                                Checkout
                            </Link>

                            <Link
                                to="/shop"
                                className="mt-4 flex items-center justify-center gap-2 text-sm text-[#6B6468] hover:text-[#4A3048]"
                            >
                                <ArrowLeft size={15} />
                                Continue Shopping
                            </Link>
                        </aside>

                    </div>
                )}

            </section>
        </main>
    );
};

export default CartPage;