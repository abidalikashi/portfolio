import React, { useEffect, useState } from "react";
import { startMatrixEffect } from "../matrix.js";
import LoadingBar from "./LoadingBar";

export default function LoadingEffect() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        startMatrixEffect(); // Start the matrix effect after the component mounts
    }, []);

    return (
        <div className="relative w-screen h-screen flex justify-center items-center bg-black">
            <canvas id="canv" className="absolute inset-0"></canvas>
            <LoadingBar value={progress} setValue={setProgress}/>
        </div>
    );
}