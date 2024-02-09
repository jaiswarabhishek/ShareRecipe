// Preloader.tsx
import { motion } from "framer-motion"
import { HiOutlineShare } from "react-icons/hi"
import TypewriterEffectSmoothDemo from "./ui/TypewriterEffectSmoothDemo"

const Preloader: React.FC = () => {
    return (
        <>
            <motion.div className="flex items-center justify-center h-screen" initial="hidden" animate="visible">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, rotate: 0 },
                        visible: {
                            opacity: 1,
                            rotate: [0, 360],
                            x: [-50, 0],
                            transition: { duration: 1 },
                        },
                    }}
                >
                    <HiOutlineShare className="mr-3 h-10 w-8 font-medium" />
                </motion.div>
                <TypewriterEffectSmoothDemo />
            </motion.div>
        </>
    )
}

export default Preloader
