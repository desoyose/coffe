module.exports = {
  content: [
    "./index.html", 
    "./**/*.html",         
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        "Dark-Cyan": "#0E8784",
        "Very-Dark-Cyan": "#2C343E",
        "Dark-Grey-Blue": "#333D4B",
        "Pale-Orange": "#FDD6BA",
        "Light-Cream": "#FEFCF7",
        "Just-Grey": "#83888F",
        "Light-Button": "#66D2CF",
        "Very-light-button":"#E2DEDB",
        "Box-Cream": "#F4F1EB",
    
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'], 
      },
    },
  },
  plugins: [],
};
