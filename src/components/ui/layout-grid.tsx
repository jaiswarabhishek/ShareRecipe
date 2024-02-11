"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/utils"

type Card = {
    id: number
    content: JSX.Element | React.ReactNode | string
    className: string
    thumbnail: string
}

const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    return (
        <div className="w-full h-full pb-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div className={cn(card.className, "relative overflow-hidden", "rounded-xl h-full w-full")} layout>
                        <BlurImage card={card} />
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

const BlurImage = ({ card }: { card: Card }) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <img
            src={card.thumbnail}
            onLoad={() => setLoaded(true)}
            className={cn("object-cover object-top absolute inset-0 transition duration-200", loaded ? "blur-none" : "blur-md")}
            alt="thumbnail"
        />
    )
}

export default LayoutGrid
