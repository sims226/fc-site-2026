"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect } from "react";

export default function DarkModeStyles() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    
    // Always clean up first
    const existingStyle = document.getElementById("dark-mode-overrides");
    if (existingStyle) {
      existingStyle.remove();
    }
    
    if (theme === "dark") {
      // Apply dark mode styles
      root.style.setProperty("--dark-bg", "#0a0a0a");
      root.style.setProperty("--dark-text", "#F7F9FC");
      root.style.setProperty("--dark-card-bg", "#1a1a1a");
      root.style.setProperty("--dark-border", "rgb(55 65 81)");
      
      // Override Tailwind classes - using multiple selector strategies
      const style = document.createElement("style");
      style.id = "dark-mode-overrides";
      style.textContent = `
        html.dark [class*="bg-\\[\\#F7F9FC\\]"] {
          background-color: #0a0a0a !important;
        }
        html.dark [class*="text-\\[\\#13233F\\]"] {
          color: #F7F9FC !important;
        }
        html.dark [class*="bg-white"] {
          background-color: #1a1a1a !important;
        }
        html.dark [class*="border-gray-200"] {
          border-color: rgb(55 65 81) !important;
        }
        html.dark p, html.dark h1, html.dark h2, html.dark h3, html.dark h4, html.dark h5, html.dark h6 {
          color: #F7F9FC !important;
        }
        /* Target cards specifically - divs with both rounded-lg and bg-white */
        html.dark div[class*="rounded-lg"][class*="bg-white"] {
          background-color: #1a1a1a !important;
        }
        html.dark div[class*="rounded-lg"][class*="border-gray-200"] {
          border-color: rgb(55 65 81) !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      // Light mode - ensure dark class is removed
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    
    // Cleanup function
    return () => {
      const styleToRemove = document.getElementById("dark-mode-overrides");
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, [theme]);

  return null;
}
