import './App.css';
import CustomNavbar from "./components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import LoadingEffect from "./components/LoadingEffect";
import LoadingBar from "./components/LoadingBar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; // React Router
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import Hobbies from "./pages/Hobbies";
import Socials from "./pages/Socials";
import Contact from "./pages/Contact";
import Console from "./components/Console"; // Assuming ConsolePage is the console component you want to render

// Define a Home component (the root path)
const Home = () => {
    return <div></div>;  // Replace with your desired home page content
};

function App() {
    const [showEffect, setShowEffect] = useState(true); // Controls the loading effect and button display
    const [loading, setLoading] = useState(false);       // Controls showing the LoadingBar
    const [progress, setProgress] = useState(0);         // Progress value for LoadingBar
    const [showConsole, setShowConsole] = useState(false); // Controls the display of ConsolePage
    const [isConsoleComplete, setIsConsoleComplete] = useState(false); // Track console completion

    const handleEnter = () => {
        setLoading(true); // Start loading bar when "Enter" is clicked
    };

    const handleConsoleComplete = () => {
        setIsConsoleComplete(true); // Set to true once the console is done
    };

    // Effect to hide the loading effect and button once progress is complete
    useEffect(() => {
        if (progress >= 100) {
            setShowEffect(false); // Hide loading effect, show main content
            setShowConsole(true); // Show ConsolePage
        }
    }, [progress]);

    useEffect(() => {
        if (isConsoleComplete) {
            setShowConsole(false); // Hide console after completion
        }
    }, [isConsoleComplete]);

    return (
        showEffect ? (
            <div className="relative w-screen h-screen flex justify-center items-center bg-black">
                {/* Container for canvas effect and button */}
                <div className="relative w-full h-full flex justify-center items-center">
                    <LoadingEffect />
                    <button
                        onClick={handleEnter}
                        style={{ color: "#00b07c" }}
                        className="absolute text-lg font-semibold custom-button"
                    >
                        Enter
                    </button>
                </div>

                {/* LoadingBar at the bottom once Enter is clicked */}
                {loading && (
                    <div className="fixed bottom-0 left-0 w-full p-4">
                        <LoadingBar value={progress} setValue={setProgress} />
                    </div>
                )}
            </div>
        ) : (
            <NextUIProvider>
                <Router>
                    <main className="dark text-foreground bg-background flex flex-col">
                        {/* Render Navbar after console is done */}
                        {isConsoleComplete && <CustomNavbar />}
                        <Routes>
                            <Route path="/" element={<Home />} /> {/* Set root path to Home */}
                            <Route path="/about-me" element={<AboutMe />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/interests" element={<Interests />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/socials" element={<Socials />} />
                            <Route path="/contact" element={<Contact />} />
                            {/* Optional: Redirect all unmatched paths to "/" */}
                            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to / for unmatched routes */}
                        </Routes>
                    </main>
                </Router>

                {/* Render ConsolePage after loading completes */}
                {showConsole && !isConsoleComplete && <Console onComplete={handleConsoleComplete} />}
            </NextUIProvider>
        )
    );
}

export default App;
