// Core component that receives mouse positions and renders pointer and content
"use client";
import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export const FollowerPointerCard = ({
    children,
    className,
    title,
}: {
    children: React.ReactNode;
    className?: string;
    title?: string | React.ReactNode;
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const [rect, setRect] = useState<DOMRect | null>(null);
    const [isInside, setIsInside] = useState<boolean>(false); // Add this line

    useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            x.set(e.clientX - rect.left + scrollX);
            y.set(e.clientY - rect.top + scrollY);
        }
    };
    const handleMouseLeave = () => {
        setIsInside(false);
    };

    const handleMouseEnter = () => {
        setIsInside(true);
    };
    return (
        <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            style={{
                cursor: "none",
            }}
            ref={ref}
            className={cn("relative", className)}
        >
            <AnimatePresence>
                {isInside && <FollowPointer x={x} y={y} title={title} />}
            </AnimatePresence>
            {children}
        </div>
    );
};

export const FollowPointer = ({
    x,
    y,
    title,
}: {
    x: any;
    y: any;
    title?: string | React.ReactNode;
}) => {
    const colors = [
        "#0ea5e9",
        "#737373",
        "#14b8a6",
        "#22c55e",
        "#3b82f6",
        "#ef4444",
        "#eab308",
    ];
    return (
        <motion.div
            className="absolute z-50 h-4 w-4 rounded-full"
            style={{
                top: y,
                left: x,
                pointerEvents: "none",
            }}
            initial={{
                scale: 1,
                opacity: 1,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            exit={{
                scale: 0,
                opacity: 0,
            }}
        >
            <svg
                className="size-8 rotate-40"
                version="1.1"
                id="icons"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 128 128"
                xmlSpace="preserve"

            >
                <g id="row1">
                    <path
                        id="nav:2_3_"
                        d="M64 1 17.9 127 64 99.8l46.1 27.2L64 1zm0 20.4 32.6 89.2L64 91.3V21.4z"
                        fill="#191919"
                    />
                </g>
            </svg>
            <motion.div

                initial={{
                    scale: 0.5,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                exit={{
                    scale: 0.5,
                    opacity: 0,
                }}
                className={
                    "min-w-max rounded-full bg-neutral-800 px-2 py-2 mt-2 text-xs whitespace-nowrap text-white shadow-md shadow-neutral-800"
                }
            >
                {title || `William Shakespeare`}
            </motion.div>
        </motion.div>
    );
};
