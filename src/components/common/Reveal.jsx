import { useEffect, useRef, useState } from "react";

const Reveal = ({
    children,
    className = "",
    delay = 0,
    duration = 700,
}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
            style={{
                "--reveal-delay": `${delay}ms`,
                "--reveal-duration": `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;