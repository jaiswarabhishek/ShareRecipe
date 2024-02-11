import { cn } from "@/utils"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        img: string
        title: string
        description: string
        link: string
    }[]
    className?: string
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-4", className)}>
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-300 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card img={item.img} title={item.title} />
                </Link>
            ))}
        </div>
    )
}

export const Card = ({ className, title, img }: { className?: string; title: string; img: string }) => {
    return (
        <div
            className={cn(
                "rounded-2xl sm:h-[10rem]  h-[15rem] w-full p-4 overflow-hidden bg-[#FFFFFF] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-50 flex justify-center items-center",
                className
            )}
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // width: "100%",
                // height: "10rem",
            }}
        >
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <h4 className="text-white text-2xl font-bold text-center leading-loose ">{title}</h4>
            </div>
        </div>
    )
}
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h4 className={cn("text-xl font-bold text-left tracking-tight text-gray-900 dark:text-white", className)}>{children}</h4>
}
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <p className={cn("text-sm text-left text-gray-500 dark:text-gray-400 mt-2 line-clamp-6 ", className)}>{children}</p>
}
