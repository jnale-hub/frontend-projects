/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "/**/*.{html,js}",
  ],
    theme: {
      extend: {
        animation: {
            blob: "blob 7s infinite"
        },
        keyframes: {
            blob: {
                "0%": {
                    transform: "translate(0px, 0px) scale(1)"
                },
                "33%": {
                    transform: "translate(20px, -30px) scale(1.1)"
                },
                "66%": {
                    transform: "translate(-20px, 30px) scale(0.9)"
                },
                "100%": {
                    transform: "translate(0px, 0px) scale(1)"
                },
            }
        },
        colors: {
        }
    },
    },
    plugins: [
    ],
  }
  
  
  