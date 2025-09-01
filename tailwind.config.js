/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        poppins:['Poppins', 'sans-serif'],
        dm: ["'DM Sans'", "sans-serif"],
        

      },
      color:{
        primary:'#F3EFE7',
        secondary:'#040404',
        third:'#FFFFFF',
        fouth:'#000000',
        textcol1:'#040404',
      },
    },
  },
  plugins: [],
}

