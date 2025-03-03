import { motion } from "framer-motion";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center relative overflow-hidden min-h-screen p-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      
      {/* Animated Background Circles */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-96 h-96 bg-blue-300/20 blur-3xl rounded-full top-[-100px] left-[-100px]"
      />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1], opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-96 h-96 bg-pink-300/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"
      />

      {/* Glassmorphic Card */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-md text-center bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 relative z-10"
      >
        {/* Animated Grid Pattern */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className={`w-16 h-16 rounded-2xl ${
                i % 3 === 0 ? "bg-blue-400 animate-bounce" : 
                i % 2 === 0 ? "bg-purple-400 animate-pulse" : 
                "bg-pink-400 animate-spin"
              }`}
            />
          ))}
        </div>

        {/* Title with Animation */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-extrabold text-white drop-shadow-lg mb-4"
        >
          {title}
        </motion.h2>

        {/* Subtitle with Smooth Transition */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-lg text-white/80"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AuthImagePattern;
