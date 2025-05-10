
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        transitionTimingFunction: {
          'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
          'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)'
        },
        colors: {
          background: "rgb(225, 214, 195)",
          dark: "rgb(65, 37, 11)",
          button: "rgb(104, 70, 39)",
          buttonHover: "rgb(145, 105, 70)",
          buttonFocus: "rgb(65, 37, 11)",
          footer: "rgb(123, 114, 96)",
          light: "rgb(255, 240, 220)",
          iconBg: "rgb(252, 219, 207)",
          iconBgHover: "rgb(218, 163, 143)",
          iconSecondaryBg: "rgb(231, 226, 218)",
          iconSecondaryBgHover: "rgb(204, 197, 184)",
          buttonSecondary: "rgb(161, 152, 135)",
          buttonSecondaryHover: "rgb(204, 197, 184)",
          buttonSecondaryFocus: "rgb(123, 114, 96)",
          gray: "rgb(123, 114, 96)",
      },
      fontFamily: {
        kompost: ['Kom-post', 'sans-serif'],
        shakyhands: ['Shakyhands', 'cursive'],
        mahone: ['Mahone Sans', 'sans-serif'],
        birchctt: ['BirchCTT', 'cursive'],
        circo: ['Circo', 'cursive'],
        ninactt: ['NinaCTT', 'cursive'],
        plovdiv: ['Plovdiv', 'cursive'],
        slimamif: ['Slimamif', 'cursive'],
        teslic: ["Teslic's Document Cyr", 'cursive'],
        tuffy: ['Tuffy', 'sans-serif'],
        appleberry: ['Apple berry', 'cursive'],


      },
      boxShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)', 
      },
      backgroundImage: {
        'duck-pattern': "url('@/assets/duck_back.png')",
        'duck-pattern-2': "url('@/assets/duck_back_2.png')",
        "hearts-pattern": "url('@/assets/hearts.png')",
        "paper-texture": "url('@/assets/paper_9.png')",
      },
    },
  },
    plugins: [],
  };