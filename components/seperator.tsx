import cn from "clsx";
export default function Separator({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-1 w-full  border-edge",
                "before:absolute md:before:-left-[100vw] before:-z-1 before:h-[0.5px] md:before:w-[176vw] before:w-[97vw]",
                "before:bg-neutral-500",
                className
            )}
        />
    );
}
