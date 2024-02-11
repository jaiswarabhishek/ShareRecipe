"use client"
import React from "react"
import { motion} from "framer-motion"
import { cn } from "@/utils"

export const TracingBeam = ({ children, className }: { children: React.ReactNode; className?: string }) => {


    return (
        <motion.div className={cn("relative w-full max-w-4xl mx-auto", className)}>
            <div >{children}</div>
        </motion.div>
    )
}
