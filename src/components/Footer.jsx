import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            {/* Decorative top border */}

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h3 className=" text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent ">
                            Arrow Jobs
                        </h3>
                        <p className="text-gray-400">Follow us on</p>
                        <div className="flex justify-center gap-6">
                            {[
                                { Icon: FaInstagram, href: "https://www.instagram.com/codingarrowofficial/" },
                                { Icon: FaLinkedin, href: "https://www.linkedin.com/company/codingarrow" },
                                { Icon: FaTwitter, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="transform transition-all duration-300 hover:scale-110 hover:text-emerald-400"
                                    aria-label={`Social media link ${index + 1}`}
                                >
                                    <social.Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Section */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Pricing", path: "" },
                                { name: "Explore", path: "/jobs" },
                                { name: "Team", path: "" },
                                { name: "Careers", path: "/careers" },
                                { name: "Privacy Policy", path: "" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 block transform hover:translate-x-2"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex justify-center space">
                                <span>Email:</span>
                                <a
                                    href="mailto:contact@CodingArrow.com"
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                                >
                                    contact@CodingArrow.com
                                </a>
                            </li>
                            <li className="leading-relaxed">
                                Address: 10th Floor, M3M Cosmopolitan, Badshahpur, Sector 66, Gurugram, Haryana 122002
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Border */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-500">
                        © 2024 Coding Arrow Pvt. Ltd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Made with &#x2665;&#xfe0f; in India.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;