import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Search, Building, MapPin, X } from 'lucide-react';

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
                title: 'Frontend Developer',
                qualifications: `- Strong proficiency in React.js and JavaScript (ES6+).
- Experience with modern CSS frameworks like TailwindCSS or Styled Components.
- Knowledge of version control systems like Git.
- Familiarity with optimizing performance for web applications.
- Bachelor's degree in Computer Science or related field (preferred).`
            },
            {
                title: 'Backend Developer',
                qualifications: `- Proficiency in Node.js and experience with Express.js or Nest.js.
- Strong understanding of databases (SQL and NoSQL) such as PostgreSQL and MongoDB.
- Experience with RESTful APIs and GraphQL.
- Knowledge of Docker, Kubernetes, and CI/CD pipelines.
- Bachelor's degree in Computer Science or related field (preferred).`
            },
            {
                title: 'Data Analyst',
                qualifications: `- Strong analytical skills with proficiency in SQL and Python.
- Experience with data visualization tools like Tableau or Power BI.
- Knowledge of statistical analysis and predictive modeling.
- Ability to communicate insights effectively to both technical and non-technical audiences.
- Bachelor's degree in Data Science, Statistics, or a related field (preferred).`
            }
        ],
        'Product & Design': [
            {
                title: 'UX/UI Engineer',
                qualifications: `- Strong understanding of user-centered design principles.
- Experience creating wireframes, prototypes, and high-fidelity designs using tools like Figma or Adobe XD.
- Knowledge of responsive design and accessibility standards.
- Ability to collaborate with developers to ensure seamless implementation of designs.
- Bachelor's degree in Design, HCI, or a related field (preferred).`
            }
        ],
        Operations: [] // Currently no roles available for Operations.
    };

    const handleRoleClick = (role) => {
        setSelectedRole(role);
        setModalOpen(true);
    };
    let url = "https://wallpapercave.com/wp/wp2022128.jpg"
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden">
                <motion.img
                    src='/bg.jpg' // Replace with your illustration/image URL
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
            <section className="py-12 px-4 bg-gray-950 h-[80vh]">
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-gray-800 w-full rounded-lg max-w-lg w-full p-6 relative"
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-300"
                            onClick={() => setModalOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-bold mb-4">{selectedRole.title}</h2>
                        <p className="text-gray-300 mb-6 whitespace-pre-line">
                            {selectedRole.qualifications}
                        </p>
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                            <span>Apply Now</span>
                            <Send className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default CareersPage;
