import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="pt-14">
                <header className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-black to-emerald-900 py-16">
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            About Arrow Jobs
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-200 font-light">
                            Redefining Job Search and Applications with AI
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiMxMGIzODEiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center text-white mb-8 relative">
                            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                                Who We Are
                            </span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center">
                            At Arrow Jobs, we are revolutionizing the way job seekers find and apply for opportunities. Leveraging advanced Artificial Intelligence, we provide a unique platform that combines a job portal, resume maker, and auto-apply features to streamline your career journey.
                        </p>
                    </section>

                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center text-white mb-12 relative">
                            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                                What We Do
                            </span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "ATS-Optimized Resumes",
                                    description: "We ensure your resumes are tailored to pass Applicant Tracking Systems, increasing your chances of getting noticed."
                                },
                                {
                                    title: "Auto-Apply",
                                    description: "Save time with our auto-apply feature, which applies to relevant job postings on your behalf."
                                },
                                {
                                    title: "Data-Driven Insights",
                                    description: "Receive personalized recommendations based on your profile and career goals."
                                }
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-gray-900 to-black p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                                >
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                                        <p className="text-gray-300">{card.description}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="relative">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-center text-white mb-8">
                                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                                    Why Choose Us?
                                </span>
                            </h2>
                            <div className="bg-gradient-to-br from-emerald-900/50 via-gray-900/50 to-black/50 rounded-3xl p-8 backdrop-blur-sm">
                                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center">
                                    Our platform is designed with your success in mind. By focusing on ATS scores, personalized resume optimization, and seamless job applications, we make sure you stand out among the crowd. Trusted by 8k+ companies and used by 15k+ candidates, Arrow Jobs is your ultimate career partner.
                                </p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-900/5 rounded-3xl"></div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;