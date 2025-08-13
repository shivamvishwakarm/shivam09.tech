import cn from "clsx";
export default function Separator({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-1 w-full  border-edge",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-[0.5px] before:w-[200vw]",
                "before:bg-neutral-500",
                className
            )}
        />
    );
}
