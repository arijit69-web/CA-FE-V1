import { useState } from 'react';
import { ArrowRight, Github, Laptop, Lock, Mail, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Player } from "@lottiefiles/react-lottie-player";

export default function SignUp() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Add your signup logic here
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Column - Image/Design */}
            <div className="hidden lg:block w-1/2 bg-gradient-to-br from-black via-gray-900 to-emerald-900">
                <div className="h-full flex items-center justify-center p-12">
                    {/* <div className="grid grid-cols-2 gap-4 max-w-2xl">

                    </div> */}
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={"/cycle.json"} // Animation data file
                        style={{ height: "100vh", width: "100vh" }}
                    />

                </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-1/2 bg-black p-8 lg:p-12 flex items-center justify-center">
                <div className="max-w-md w-full space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-2">Create Account</h2>
                        <p className="text-gray-400 mb-8">Start your journey with us today</p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-300 text-sm font-medium mb-1 block">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-900 border border-gray-800 text-white px-10 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-300 text-sm font-medium mb-1 block">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-gray-900 border border-gray-800 text-white px-10 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-300 text-sm font-medium mb-1 block">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-gray-900 border border-gray-800 text-white px-10 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-medium ${loading
                                ? 'bg-emerald-600 cursor-not-allowed'
                                : 'bg-emerald-500 hover:bg-emerald-600'
                                } transition-all duration-200`}
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </motion.button>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-black text-gray-400">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="flex items-center justify-center py-3 px-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-200"
                            >
                                <Github className="h-5 w-5 text-white" />
                                <span className="ml-2 text-white">GitHub</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center py-3 px-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-200"
                            >
                                <Laptop className="h-5 w-5 text-white" />
                                <span className="ml-2 text-white">Demo</span>
                            </button>
                        </div>

                        <p className="text-center text-gray-400 text-sm">
                            Already have an account?{' '}
                            <a href="/login" className="text-emerald-500 hover:text-emerald-400">
                                Sign in
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}