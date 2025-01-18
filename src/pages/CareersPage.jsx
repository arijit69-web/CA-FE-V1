import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Search, Building, MapPin, X, Check, CheckCircle } from 'lucide-react';

const CareersPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState('Engineering & Data');
    const [modalOpen, setModalOpen] = useState(false);

    const teams = [
        { name: 'Engineering & Data', count: 3 },
        { name: 'Operations', count: 0 },
        { name: 'Product & Design', count: 1 }
    ];

    const roles = {
        'Engineering & Data': [
            {
                title: 'Frontend Engineer (Internship)',
                description: " ₹ 25k – ₹ 75k • | Remote • Gurgugram | 6 months of exp | Internship",
                about: "We're seeking an exceptional frontend engineer who can architect and build. We're not looking for specialists, rather driven problem solvers who can move seamlessly between crafting intuitive UIs and engineering browser capabilities to their limits. You'll work directly with the founders, tackling challenges to make tools people can't live without.",
                responsibilities: [
                    "Create fluid, responsive interfaces that make complex AI capabilities feel intuitive",
                    "Build high-performance processing pipelines that run entirely in the browser",
                    "Ship features that define new standards for AI",
                    "Work closely with research to rapidly prototype and productize new model capabilities",
                    "Drive improvements in frontend architecture and development practices"
                ],
                requirements: [
                    "1+ years building complex web applications, with deep React expertise",
                    "Track record of shipping 0-to-1 features that users love",
                    "Experience optimizing performance in demanding frontend applications",
                    "Ability to move fast, iterate from user feedback, and execute on tight deadlines",
                    "Obsession with craft and user experience",
                    "Strong team player who thrives in highly collaborative, fast-moving environments"
                ],
                values: [
                    "Raw intelligence: we tackle complex problems and push the boundaries of what's possible",
                    "Boundless curiosity: we're always learning, exploring new technologies, and questioning assumptions",
                    "Exceptional resolve: we persevere through challenges and never lose sight of our goals",
                    "High agency: we take ownership of our work and drive initiatives forward autonomously",
                    "Outlier hustle: we work smart and hard, going above and beyond to achieve extraordinary results",
                    "Obsessively data-driven: we base our decisions on solid data and measurable outcomes",
                    "Radical candor: we communicate openly and honestly, providing direct feedback to help each other grow"
                ]
            },
            {
                title: 'Backend Developer',
                about: "We are looking for a backend developer who thrives in tackling challenging problems, building scalable systems, and ensuring seamless integration across complex architectures. You will work with cutting-edge technologies to power user experiences.",
                description: " ₹ 45k – ₹ 90k • | Remote • Gurgugram | +1 years of exp | Full-Time",

                responsibilities: [
                    "Develop and maintain scalable backend systems using Node.js and frameworks like Express.js or Nest.js",
                    "Design and implement robust APIs (RESTful and GraphQL)",
                    "Optimize database operations and queries for performance and scalability",
                    "Implement and manage CI/CD pipelines and containerized deployments",
                    "Collaborate with frontend engineers to ensure smooth API integration"
                ],
                requirements: [
                    "Proficiency in Node.js and experience with Express.js or Nest.js",
                    "Strong understanding of databases (SQL and NoSQL) such as PostgreSQL and MongoDB",
                    "Experience with Docker, Kubernetes, and CI/CD pipelines",
                    "Solid understanding of software design principles and best practices",
                    "Bachelor's degree in Computer Science or related field (preferred)"
                ],
                values: [
                    "Team collaboration: working closely with cross-functional teams",
                    "Reliability: building systems that users and the company can depend on",
                    "Continuous improvement: seeking to enhance both processes and systems"
                ]
            },
            {
                title: 'Data Analyst',
                description: " ₹ 30k – ₹ 75k • | Remote • Gurgugram | +1 years of exp | Full-Time",

                about: "As a Data Analyst, you will transform complex data into actionable insights, helping the team make data-driven decisions. This role combines statistical analysis with creative visualization to communicate impactful results.",
                responsibilities: [
                    "Analyze large datasets to identify trends, patterns, and insights",
                    "Create dashboards and reports using tools like Tableau or Power BI",
                    "Collaborate with teams to understand data needs and provide actionable insights",
                    "Conduct statistical analysis and predictive modeling",
                    "Ensure data accuracy and integrity through rigorous validation"
                ],
                requirements: [
                    "Strong analytical skills with proficiency in SQL and Python",
                    "Experience with data visualization tools like Tableau or Power BI",
                    "Knowledge of statistical analysis and predictive modeling",
                    "Ability to communicate insights effectively to technical and non-technical audiences",
                    "Bachelor's degree in Data Science, Statistics, or a related field (preferred)"
                ],
                values: [
                    "Data-driven mindset: ensuring all decisions are backed by strong data",
                    "Attention to detail: precision in every analysis and report",
                    "Problem-solving: finding insights that directly impact business outcomes"
                ]
            }
        ],
        'Product & Design': [
            {
                title: 'UX/UI Engineer',
                description: " ₹ 10k – ₹ 45k • | Remote • Gurgugram | 6 months of exp | Full-Time",

                about: "Join us as a UX/UI Engineer to create intuitive and delightful user experiences. You'll collaborate with cross-functional teams to turn user needs into engaging designs and seamless interactions.",
                responsibilities: [
                    "Design user-centered interfaces and experiences",
                    "Create wireframes, prototypes, and high-fidelity designs using Figma or Adobe XD",
                    "Ensure designs meet accessibility standards and are responsive",
                    "Work with developers to implement designs accurately",
                    "Stay updated on design trends and best practices"
                ],
                requirements: [
                    "Strong understanding of user-centered design principles",
                    "Experience creating wireframes, prototypes, and high-fidelity designs using tools like Figma or Adobe XD",
                    "Knowledge of responsive design and accessibility standards",
                    "Ability to collaborate effectively with developers and stakeholders",
                    "Bachelor's degree in Design, HCI, or a related field (preferred)"
                ],
                values: [
                    "Empathy: putting the user at the center of every decision",
                    "Creativity: bringing unique ideas to life in every design",
                    "Collaboration: working closely with teams to achieve the best outcomes"
                ]
            }
        ],
        Operations: [] // Currently no roles available for Operations.
    };


    const handleRoleClick = (role) => {
        setSelectedRole(role);
        setModalOpen(true);
    };
    let url = 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            {/* Hero Section */}
            <div className="relative top-14 h-[70vh] overflow-hidden">
                <motion.img
                    src={url} // Replace with your illustration/image URL
                    alt="Team collaboration"
                    className="absolute w-full h-full object-cover"
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 0.999 }}
                    transition={{ duration: 3, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-bold mb-4"
                    >
                        Join Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl"
                    >
                        Help us shape the future of work by building amazing experiences.
                    </motion.p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <section className="py-14 px-4 bg-gray-950 h-[80vh] overflow-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-6">
                        {/* Left Sidebar */}
                        <div className="md:col-span-3">
                            <h2 className="text-lg font-semibold mb-4">Filter by teams</h2>
                            <div className="space-y-2">
                                {teams.map((team) => (
                                    <button
                                        key={team.name}
                                        onClick={() => setSelectedTeam(team.name)}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedTeam === team.name
                                            ? 'bg-emerald-500/10 text-emerald-400'
                                            : 'hover:bg-gray-700'
                                            }`}
                                    >
                                        {team.name} · {team.count}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-9">
                            {/* Available Roles */}
                            <h2 className="text-xl font-semibold mb-6">
                                {selectedTeam} Roles
                            </h2>
                            <div className="space-y-4">
                                {roles[selectedTeam] && roles[selectedTeam].length > 0 ? (
                                    roles[selectedTeam].map((role) => (
                                        <div
                                            key={role.title}
                                            onClick={() => handleRoleClick(role)}
                                            className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
                                        >
                                            <h3 className="text-lg font-semibold mb-4">
                                                {role.title}
                                            </h3>
                                            <p className="text-md  mb-4">{role.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-300">No roles available at the moment.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for Job Details */}
            {modalOpen && selectedRole && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-gray-900 rounded-xl w-[100%] h-[80vh] sm:md:lg:xl:w-[80%] sm:md:lg:xl:h-[80vh] relative overflow-hidden flex flex-col"
                    >
                        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{selectedRole.title}</h2>
                            <button
                                className="text-gray-400 hover:text-gray-300 transition-colors"
                                onClick={() => setModalOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            <section>
                                <h3 className="text-xl font-semibold mb-4 text-emerald-400">About the role</h3>
                                <p className="text-gray-300 leading-relaxed">{selectedRole.about}</p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-4 text-emerald-400">What you'll do</h3>
                                <ul className="space-y-3">
                                    {selectedRole.responsibilities.map((resp, index) => (
                                        <li key={index} className="flex items-start space-x-3 text-gray-300">
                                            <ArrowRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-4 text-emerald-400">What you'll need</h3>
                                <ul className="space-y-3">
                                    {selectedRole.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start space-x-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Our Values</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {selectedRole.values.map((value, index) => (
                                        <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                                            <p className="text-gray-300"><span className="text-emerald-400 font-semibold">[{index + 1}]</span> {value}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="relative left-8 sm:left-16 md:lg:xl:left-[25%] py-4 w-[80%] sm:md:lg:xl:w-[50%]  border-t border-gray-800 bg-gray-900">
                            <a
                                href="mailto:careers.codingarrow.com?subject=Application for Frontend Engineer Position&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to apply for the position of Frontend Engineer.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards,"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 w-full transition-colors no-underline"
                            >
                                <span className="font-semibold">Share Your CV/Resume</span>
                                <Send className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default CareersPage;
