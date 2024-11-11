import React, { useEffect, useState, useRef } from 'react';

const Console = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);
    const endOfLogsRef = useRef(null);
    const isSimulationStarted = useRef(false); // Use useRef to track if the simulation has started

    useEffect(() => {
        const logEntries = [
            "[INFO] Initializing system boot sequence...",
            "[INFO] Git IO service initialized.",
            "[INFO] Loading kernel modules...",
            "[INFO] Initializing hardware...",
            "[INFO] Setting up CPU...done.",
            "[INFO] Checking memory...512MB OK.",
            "[INFO] Initializing storage devices...done.",
            "[INFO] Mounting filesystems...",
            "[INFO] Starting network services...",
            "[INFO] Bringing up interface eth0...",
            "[INFO] Network configured on IP: 122.178.11.10",
            "[INFO] Starting React Server...",
            "[INFO] React running on port 80.",
            "[INFO] Collecting Assets...",
            "[INFO] Generating User Interfaces...",
            "[INFO] Starting PHP ...",
            "[INFO] PHP failed to load.",
            "[INFO] Checking SSL certificates...",
            "[INFO] SSL configured for domain SCP-Containment-Breach.com.",
            "[INFO] System ready.",
            "[INFO] LAMP stack initialized successfully.",
            "[ERROR] Failed to bind port 443: permission denied.",
            "[WARNING] Low memory: optimizing IBM Thread pool...",
            "[INFO] Monitoring system resources...",
            "[INFO] Restarting network services...",
            "[SUCCESS] All services operational."
        ];

        let currentLogIndex = 0;

        const addLogEntry = (log) => {
            const timestamp = new Date().toLocaleTimeString();
            setLogs((prevLogs) => [...prevLogs, `[${timestamp}] ${log}`]);
        };

        const simulateLogs = () => {
            if (currentLogIndex < logEntries.length) {
                addLogEntry(logEntries[currentLogIndex]);
                currentLogIndex++;
                setTimeout(simulateLogs, 200);
            } else {
                setTimeout(() => {
                    onComplete();
                }, 2000);
            }
        };

        // Only start simulation if it hasn't started yet
        if (!isSimulationStarted.current) {
            isSimulationStarted.current = true; // Mark that simulation has started
            simulateLogs();
        }
    }, [onComplete]);  // Dependency array does not include logs to prevent unwanted reruns

    useEffect(() => {
        endOfLogsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    return (
        <div className="console-wrapper">
            <div className="console-content">
                {logs.map((log, index) => (
                    <div key={index} className="log-entry">
                        <span className="log-timestamp">{log}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Console;
