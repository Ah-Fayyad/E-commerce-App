/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // حالياً نطفي الداكن لأنك طلبت متوقف؛ لو حبيت تفعل بعدين غيّره 'class'
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        accent: "#F97316",
        surface: "#F3F4F6",
        text: "#111827",
      },
      fontFamily: {
        sans: ["Cairo", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
