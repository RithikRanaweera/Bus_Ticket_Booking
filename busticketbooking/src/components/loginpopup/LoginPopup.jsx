import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    useEffect(() => {
        // Add 'overflow-hidden' class to <body> when popup is active
        document.body.classList.add("overflow-hidden");

        // Cleanup: Remove the class when popup is closed
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <div className="absolute z-10 grid w-full h-full bg-black/60">
            <form className="place-self-center max-w-[23vw] sm:max-w-[330px] text-gray-500 bg-white flex flex-col gap-6 p-8 rounded-lg text-sm animate-fadeIn">
                <div className="flex items-center justify-between text-black">
                    <h1 className="text-xl font-bold">{currState}</h1>
                    <RxCross2
                        onClick={() => setShowLogin(false)}
                        className="cursor-pointer w-7 h-7"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    {currState === "Login" ? null : (
                        <input
                            type="text"
                            placeholder="Your name"
                            className="p-4 border border-gray-300 rounded-md outline-none"
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Your email"
                        className="p-4 border border-gray-300 rounded-md outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-4 border border-gray-300 rounded-md outline-none"
                        required
                    />
                </div>
                <button className="p-4 font-medium text-white rounded-md bg-primary">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="flex items-baseline gap-2">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span
                            onClick={() => setCurrState("Sign Up")}
                            className="px-1 font-medium cursor-pointer text-primary"
                        >
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span
                            onClick={() => setCurrState("Login")}
                            className="px-1 font-medium cursor-pointer text-primary"
                        >
                            Login here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
