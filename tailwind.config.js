/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", 
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                cinzeldecorative: ["Cinzel Decorative", "serif"],
                redhat: ["Red Hat Display", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
