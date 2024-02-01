const { createThemes } = require('tw-colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        desktop: "url('/assets/splash-bg-1.jpeg')",
      },
      fontSize:{
        "xxs":"0.6rem",
        'xxs': ['0.6rem', {
          lineHeight: '0.8rem',
          letterSpacing: '-0.01em',
        }],
      },
      keyframes: {
        expand: {
          "0% ": { "max-height": "0px" },
          "100%": { "max-height": "600vh", overflow: "auto" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        grow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        expand: "expand 700ms linear forwards",
        "expand-slow": "expand 1s ease-in forwards",
        fadein: "fadeIn 400ms ease-in-out",
        growOut: "grow 200ms ease-in-out forwards",
        spinslow:"spin 5s linear infinite"
      },
      minHeight: {
        "40vh": "40vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
      },
    },
  },
  plugins: [createThemes({
    default:{
      "custom-white": "#ffffff",
      "custom-black-secondary": "rgba(123, 118, 123, 0.79)",
      "custom-blue-primary": "#006DCD",
      "custom-blue-secondary": "rgba(0, 108, 203, 0.6)",
      "custom-gray": "#C9C9C9",
      "custom-text-link": "#00337F",
      "custom-gray-primary": "rgba(82, 77, 77, 1)",
      "custom-gray-secondary": "rgba(82, 77, 77, 0.57)",
      "custom-text-have-account": "#313957",
      "custom-or-text": "#294957",
      "custom-blue-dark": "#102749",
      "custom-blue-light": "#1b365d",
      "custom-chats-bg-blue": "#0e1d33",
      "custom-divider-gray": "#495662",
      "custom-tooltip": "rgba(0, 0, 0, 0.7)",
      "custom-dark-blue": "#314C74F0",
      "custom-left-panel": "#A9A9A9",
      "custom-popup": "#213655",
      "custom-cancel-button": "#17345D",
      "custom-popup-question": "#BDBDBD",
      "custom-popup-answer": "#E3E9EE",
      "custom-search-bar": "#1A4078",
      "custom-popup-shadow": "#0064BC",
      "custom-profile-selection-border": "#3684CF",
      "custom-profile-selection-bg": "#213655",
      "search-border":"#1A4078",
      "section-header":'#ffffff',
      "navbar-bg":"#040B27",
      "navbar-border":"#040B27",
      "tile-border":"#1b365d",
      "tile-header":"#ffffff",
      "button-border":"#006DCD"
    },
    light: {
      "custom-white": "#ffffff",
      "custom-black-secondary": "rgba(123, 118, 123, 0.79)",
      "custom-blue-primary": "#006DCD",
      "custom-blue-secondary": "rgba(0, 108, 203, 0.6)",
      "custom-gray": "#C9C9C9",
      "custom-text-link": "#00337F",
      "custom-gray-primary": "rgba(82, 77, 77, 1)",
      "custom-gray-secondary": "rgba(82, 77, 77, 0.57)",
      "custom-text-have-account": "#313957",
      "custom-or-text": "#294957",
      "custom-blue-dark": "#102749",
      "custom-blue-light": "#1b365d",
      "custom-chats-bg-blue": "#0e1d33",
      "custom-divider-gray": "#495662",
      "custom-tooltip": "rgba(0, 0, 0, 0.7)",
      "custom-dark-blue": "#314C74F0",
      "custom-left-panel": "#A9A9A9",
      "custom-popup": "#213655",
      "custom-cancel-button": "#17345D",
      "custom-popup-question": "#BDBDBD",
      "custom-popup-answer": "#E3E9EE",
      "custom-search-bar": "#1A4078",
      "custom-popup-shadow": "#0064BC",
      "custom-profile-selection-border": "#3684CF",
      "custom-profile-selection-bg": "#213655",
      'search-border':'#1A4078',
      "section-header":'#ffffff',
      "navbar-bg":"#040B27",
      "navbar-border":"#ffffff",
      "tile-border":"#ffffff",
      "tile-header":"#3CBD88",
      "button-border":"#ffffff"
    },
    highContrast:{
      
        "custom-white": "#ffffff",
        "custom-black": "#000",
        "custom-black-secondary": "rgba(123, 118, 123, 0.79)",
        "custom-blue-primary": "#600040",
        "custom-blue-secondary": "rgba(0, 108, 203, 0.6)",
        "custom-gray": "#C9C9C9",
        "custom-text-link": "#00337F",
        "custom-gray-primary": "rgba(82, 77, 77, 1)",
        "custom-gray-secondary": "rgba(82, 77, 77, 0.57)",
        "custom-blue-dark": "#000000",
        "custom-blue-light": "#000000",
        "custom-chats-bg-blue": "#0e1d33",
        "custom-divider-gray": "#495662",
        "custom-tooltip": "rgba(0, 0, 0, 0.7)",
        "custom-dark-blue": "#314C74F0",
        "custom-left-panel": "#A9A9A9",
        "custom-popup": "#213655",
        "custom-cancel-button": "#17345D",
        "custom-popup-question": "#BDBDBD",
        "custom-popup-answer": "#E3E9EE",
        "custom-search-bar": "#000000",
        "custom-popup-shadow": "#0064BC",
        "custom-profile-selection-border": "#3684CF",
        "custom-profile-selection-bg": "#213655",
        'search-border':'#ffffff',
        "section-header":'#3CBD88',
        "navbar-bg":"#000000",
        "navbar-border":"#ffffff",
        "tile-border":"#ffffff",
        "tile-header":"#3CBD88",
        "button-border":"#ffffff"
      },
      negativeContrast:{
      
        "custom-white": "#ffffff",
        "custom-black-secondary": "rgba(123, 118, 123, 0.79)",
        "custom-blue-primary": "#000000",
        "custom-blue-secondary": "rgba(0, 108, 203, 0.6)",
        "custom-gray": "#C9C9C9",
        "custom-text-link": "#00337F",
        "custom-gray-primary": "rgba(82, 77, 77, 1)",
        "custom-gray-secondary": "rgba(82, 77, 77, 0.57)",
        "custom-blue-dark": "#000000",
        "custom-blue-light": "#000000",
        "custom-chats-bg-blue": "#0e1d33",
        "custom-divider-gray": "#495662",
        "custom-tooltip": "rgba(0, 0, 0, 0.7)",
        "custom-dark-blue": "#314C74F0",
        "custom-left-panel": "#A9A9A9",
        "custom-popup": "#213655",
        "custom-cancel-button": "#17345D",
        "custom-popup-question": "#BDBDBD",
        "custom-popup-answer": "#E3E9EE",
        "custom-search-bar": "#000000",
        "custom-popup-shadow": "#0064BC",
        "custom-profile-selection-border": "#3684CF",
        "custom-profile-selection-bg": "#213655",
        'search-border':'#ffffff',
        "section-header":'#D4CA00',
        "navbar-bg":"#000000",
        "navbar-border":"#ffffff",
        "tile-border":"#ffffff",
        "tile-header":"#D4CA00",
        "button-border":"#D4CA00"
      }
    
  })],
};