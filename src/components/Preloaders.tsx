// Preloader.tsx
import { motion, Variants } from "framer-motion"
import { HiOutlineShare } from "react-icons/hi"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const letterVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

const Preloader: React.FC = () => {
  const letters = "ShareRecipe"

  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
        <HiOutlineShare className="mr-3 h-10 w-10 font-bold" />
      </motion.div>
      {letters.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="m-1 text-3xl font-bold text-gray-700 flex items-center justify-center"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default Preloader
