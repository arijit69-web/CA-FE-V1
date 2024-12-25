import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUp, signUpWithGmail } = useContext(AuthContext); // Include signUpWithGmail
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password, name) // Pass name if your signup logic supports it
            .then((result) => {
                const user = result.user;
                console.log(user);
                alert("Signup successful!");
                navigate("/home"); // Redirect after successful signup
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage("Failed to create account. Please try again.");
                console.error(error);
            });
    };

    const handleGoogleSignup = () => {
        signUpWithGmail()
            .then((result) => {
                const user = result.user;
                console.log(user);
                alert("Signup with Google successful!");
                navigate("/home"); // Redirect after successful signup
            })
            .catch((error) => {
                console.error("Google Signup Error:", error.message);
                setErrorMessage("Failed to sign up with Google. Please try again.");
            });
    };

    return (
        <div className="h-screen mx-auto container flex items-center justify-center">
            <div className="w-full max-w-xs mx-auto">
                <form
                    onSubmit={handleSignup}
                    className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"
                >
                    <h3 className="text-xl font-semibold mb-4">Create an Account!</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="name@email.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            required
                        />
                        {errorMessage && (
                            <p className="text-red-500 text-xs italic">{errorMessage}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <input
                            className="bg-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                </form>

                {/* Google Signup Button */}
                <div className="text-center mt-6">
                    <p className="mb-4">Or sign up with</p>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 w-full"
                        onClick={handleGoogleSignup}
                    >
                        <FaGoogle />
                        Sign up with Google
                    </button>
                </div>

                <p className="text-center text-gray-500 text-xs mt-6">
                    &copy;2023 JobPortal. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Signup;
