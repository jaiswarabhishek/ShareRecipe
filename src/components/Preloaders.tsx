// Preloader.tsx
import { motion, Variants } from 'framer-motion';
import { HiOutlineShare} from 'react-icons/hi';
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Preloader: React.FC = () => {
  const letters = 'ShareRecipe';

  return (
    <div className="flex items-center justify-center h-screen">
      {letters.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="m-1 text-3xl font-bold text-gray-700 flex items-center justify-center"
        >
       {index===0 && <HiOutlineShare className="mr-3 h-7 w-7 font-bold" /> }  {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default Preloader;
