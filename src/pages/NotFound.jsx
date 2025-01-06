import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Player
                        autoplay
                        loop
                        src="/NotFound.json" // Animation data file
                        style={{
                            height: "30vh",
                            width: "100%",
                            maxWidth: "500px",
                            margin: "0 auto",
                        }}
                    />
                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                        404
                    </h1>
                    <h2 className="text-lg sm:text-2xl text-gray-400 mb-4 sm:mb-8">
                        Page Not Found
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12">
                        Sorry, the page you’re looking for doesn’t exist or has been moved.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/"
                        className="inline-flex items-center justify-center py-3 px-5 sm:px-6 rounded-lg text-white font-medium bg-emerald-500 hover:bg-emerald-600 transition-all duration-200"
                    >
                        Go Back Home
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
