"use client";
import React, { useState } from 'react';

export const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <aside
            className={`bg-gray-800 text-white fixed top-0 left-0 h-screen ${isExpanded ? 'w-64' : 'w-16'}`}
            
        >
            <div className="flex flex-col justify-between h-screen px-4 mt-5">
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 left-4 bg-gray-700 p-2 rounded"
                >
                    {/* Aquí puedes poner un icono para expandir/contraer */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                    </svg>
                </button>
                <div className="flex flex-col space-y-4 mt-10">
                    <button className="flex items-center top-4 left-4 bg-gray-700 p-2 rounded mt-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                        <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Video Editor</span>
                    </button>
                    <button className="flex items-center top-4 left-4 bg-gray-700 p-2 rounded">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14z"></path>
                        </svg>
                        <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Files</span>
                    </button>
                    <hr className={`my-2 ${isExpanded ? 'block' : 'hidden'}`} />
                    <button className="flex items-center top-4 left-4 bg-gray-700 p-2 rounded">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Account</span>
                    </button>
                    <button className="flex items-center top-4 left-4 bg-gray-700 p-2 rounded">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m-4 4l-4-4m4 4V8"></path>
                        </svg>
                        <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
