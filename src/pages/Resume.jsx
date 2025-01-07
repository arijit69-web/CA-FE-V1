import React from 'react';
import { FileText, Edit3, Award, Star, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";

const ResumeEditor = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            {/* Hero Section */}
            <div className="container h-auto mx-auto px-4 py-20">
                <div className="flex flex-col items-center justify-between gap-6">
                    <div className="text-center px-4 py-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
                            <span className="text-emerald-400">AI-Powered</span> Resume Editor
                        </h1>
                        <p className="text-base sm:text-lg text-gray-300 mb-8">
                            Create a standout resume with our intelligent editing tools and professional templates
                        </p>
                    </div>

                    <div className="w-1/2 sm:w-2/3 lg:w-1/3">
                        <div className="relative bg-black rounded-xl">
                            <motion.div
                                animate={{
                                    scale: [1, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute inset-0 bg-emerald-100 blur-3xl"
                            ></motion.div>
                            <div className="relative bg-gray-900 p-4 sm:p-6 rounded-xl border border-emerald-500/30">
                                <pre className="text-emerald-400 font-mono text-lg sm:text-2xl">
                                    <Typewriter
                                        options={{
                                            strings: ['Coming Soon..', "ATS friendly", "Optimized by AI"],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                        }}
                                    />
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="container mx-auto px-4 py-10 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                    Ready to Create Your Perfect ATS Resume?
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of professionals who have already enhanced their job applications with our AI-powered tools
                </p>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                    <span>Start Building Now</span>
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default ResumeEditor;
