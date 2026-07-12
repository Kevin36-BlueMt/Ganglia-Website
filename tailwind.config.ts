import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ganglia: {
          ink: "#071414",
          teal: "#3EE6C1",
          aqua: "#7FF6E3",
          slate: "#99B8B4",
          mist: "#D8FFFA"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(62, 230, 193, 0.16), 0 24px 80px rgba(62, 230, 193, 0.14)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(62, 230, 193, 0.22), transparent 30%), radial-gradient(circle at 20% 20%, rgba(35, 94, 88, 0.6), transparent 36%), linear-gradient(180deg, #071414 0%, #020808 100%)"
      },
      fontFamily: {
        sans: ["Avenir Next", "SF Pro Display", "Segoe UI", "sans-serif"],
        serif: ["Iowan Old Style", "Georgia", "serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.96)", opacity: "0.5" },
          "100%": { transform: "scale(1.08)", opacity: "0" }
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulseRing 3.6s ease-out infinite",
        reveal: "reveal 0.8s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
