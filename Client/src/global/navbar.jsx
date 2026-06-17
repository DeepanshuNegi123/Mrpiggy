import React, { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      )
    },
    {
      name: "Portfolio",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 7h-4V4.5c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2V7h-4c-1.1 0-2 .9-2 2v10.5c0 1.1.9 2 2 2h17c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9.5 4.5h5V7h-5V4.5z" />
        </svg>
      )
    },
    {
      name: "Markets",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      name: "Watchlist",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.97-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      name: "Settings",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeItem = menuItems.find(item => item.name === activeTab) || menuItems[0];

  return (
    <nav className="sticky top-0 z-50 h-20 bg-[rgb(18,19,21)]/90 backdrop-blur-md border-b border-yellow-600/15 px-6 md:px-12 flex items-center justify-between transition-all duration-300">
      {/* Left: Logo & Brand */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
          <img
            src="serious.png"
            alt="MrPiggy"
            className="relative h-11 w-11 rounded-full object-cover border border-yellow-500/20 transform group-hover:scale-105 transition duration-300"
          />
        </div>
        <span className="hidden sm:block text-xl font-bold tracking-tight text-white group-hover:text-yellow-500 transition duration-300">
          Mr. <span className="text-yellow-500 group-hover:text-white transition duration-300">Piggy</span>
        </span>
      </div>

      {/* Right: Custom Dropdown Menu (All Screens) */}
      <div className="relative" ref={dropdownRef}>
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-[rgb(28,30,34)] border border-yellow-600/20 px-4 py-2.5 rounded-xl text-yellow-500 font-semibold text-sm hover:bg-[rgb(34,36,41)] transition-all duration-300 cursor-pointer shadow-lg shadow-black/20 hover:border-yellow-500/40"
        >
          <span className="opacity-90">{activeItem.icon}</span>
          <span>{activeItem.name}</span>
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Custom Dropdown List */}
        {isOpen && (
          <div className="absolute right-0 mt-2.5 w-56 bg-[rgb(25,27,30)] border border-yellow-600/20 rounded-2xl shadow-2xl shadow-black/80 py-2 overflow-hidden z-50 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-yellow-600/60 uppercase">
              Navigation
            </div>
            {menuItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 text-left cursor-pointer
                    ${
                      isActive
                        ? "text-yellow-500 bg-gradient-to-r from-yellow-500/10 to-transparent border-l-2 border-yellow-500"
                        : "text-gray-300 hover:text-white hover:bg-yellow-500/5 hover:translate-x-0.5"
                    }
                  `}
                >
                  <span className={isActive ? "text-yellow-500" : "text-gray-400"}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};