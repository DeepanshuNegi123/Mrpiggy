import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Define per-route behavior here. Add a new key for every route path you care about.
// "scrollMode":
//   "sticky"  -> stays pinned at top always (current dashboard behavior)
//   "hide"    -> hides on scroll down, reappears on scroll up
//   "normal"  -> scrolls away with the page, no special positioning
const ROUTE_CONFIG = {
  "/": {
    scrollMode: "sticky",
    bg: "bg-[rgb(18,19,21)]/90",
    border: "border-[#c5a059]/25",
  },
  "/about": {
    scrollMode: "normal",
    bg:"bg-[rgb(73,41,34)]",
    border: "border-transparent",
  },
  "/dashboard": {
    scrollMode: "sticky",
    bg: "bg-[rgb(18,19,21)]/90",
    border: "border-[#c5a059]/25",
  },
};

const DEFAULT_CONFIG = {
  scrollMode: "sticky",
  bg: "bg-[rgb(18,19,21)]/90",
  border: "border-[#c5a059]/25",
};

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // --- route-aware behavior ---
  const location = useLocation();
  const config = ROUTE_CONFIG[location.pathname] || DEFAULT_CONFIG;

  // --- hide-on-scroll-down state (only used when scrollMode === "hide") ---
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (config.scrollMode !== "hide") {
      setHidden(false);
      return;
    }

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const pastThreshold = currentY > 80; // don't hide right at the top

      setHidden(scrollingDown && pastThreshold);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [config.scrollMode]);

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

  // --- positioning classes derived from scrollMode ---
  const positionClass =
    config.scrollMode === "sticky"
      ? "sticky top-0"
      : config.scrollMode === "hide"
      ? "fixed top-0 left-0 right-0"
      : "relative"; // "normal" — scrolls away with the page

  const hideTransformClass =
    config.scrollMode === "hide"
      ? hidden
        ? "-translate-y-full"
        : "translate-y-0"
      : "";

  return (
    <nav
      className={`${positionClass} ${hideTransformClass} z-50 h-20 ${config.bg} backdrop-blur-md border-b ${config.border} px-6 md:px-12 flex items-center justify-between transition-all duration-300`}
    >
      {/* Left: Logo & Brand */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full blur-md bg-[#e5c158]/40 opacity-40 group-hover:opacity-100 transition duration-500"></div>
          <img
            src="/serious.png"
            alt="MrPiggy"
            className="relative h-11 w-11 rounded-full object-cover border border-[#e5c158]/40 transform group-hover:scale-105 transition duration-300 shadow-lg"
          />
        </div>
        <span className="hidden sm:block text-xl font-bold tracking-tight text-white group-hover:text-[#e5c158] transition duration-300">
          Mr. <span className="text-[#e5c158] drop-shadow-[0_0_10px_rgba(229,193,88,0.5)] group-hover:text-white transition duration-300">Piggy</span>
        </span>
      </div>

      {/* Right: Custom Dropdown Menu (All Screens) */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-[rgb(28,30,34)] border border-[#c5a059]/30 px-4 py-2.5 rounded-xl text-[#e5c158] font-semibold text-sm hover:bg-[rgb(34,36,41)] transition-all duration-300 cursor-pointer shadow-lg shadow-black/40 hover:border-[#e5c158] hover:shadow-[#e5c158]/15 hover:shadow-md"
        >
          <span className="opacity-90 drop-shadow-[0_0_8px_rgba(229,193,88,0.3)]">{activeItem.icon}</span>
          <span className="drop-shadow-[0_0_8px_rgba(229,193,88,0.3)]">{activeItem.name}</span>
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

        {isOpen && (
          <div className="absolute right-0 mt-2.5 w-56 bg-[rgb(25,27,30)] border border-[#c5a059]/35 rounded-2xl shadow-2xl shadow-black/90 py-2 overflow-hidden z-50 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#c5a059]/70 uppercase drop-shadow-[0_0_6px_rgba(197,160,89,0.2)]">
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
                        ? "text-[#e5c158] bg-gradient-to-r from-[#e5c158]/15 to-transparent border-l-2 border-[#e5c158] drop-shadow-[0_0_8px_rgba(229,193,88,0.4)]"
                        : "text-gray-300 hover:text-white hover:bg-[#e5c158]/5 hover:translate-x-0.5"
                    }
                  `}
                >
                  <span className={isActive ? "text-[#e5c158]" : "text-gray-400"}>
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