"use client"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect"
export default function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Cook",
        },
        {
            text: "Share",
        },
        {
            text: "Inspire",
        },
        {
            text: "with",
        },
        {
            text: "ShareRecipe",
            className: "text-[#0E7490] dark:text-blue-500",
        },
    ]
    return (
        <div className="sm:flex hidden flex-col items-center justify-center my-4 ">
            <TypewriterEffectSmooth words={words} />
        </div>
    )
}
