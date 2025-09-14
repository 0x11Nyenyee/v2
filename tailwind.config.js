/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		backdropBlur: {
		  sm: '4px',
		},
		colors: {
		  skyblue: {
			600: "#87CEEB", // sudah ada
		  },
		  dodgerblue: {
			600: "#1E90FF", // sudah ada
		  },
		  mediumblue: {
			200: "#0000CD", // ditambahkan
		  },
		  mediumblue: {
			300: "#0000CD", // ditambahkan
		  },
		  mediumblue: {
			400: "#0000CD", // ditambahkan
		  },
		  mediumblue: {
			500: "#0000CD", // ditambahkan
		  },
		  mediumblue: {
			600: "#0000CD", // ditambahkan
		  },
		  stars: {
			400: "#B3ECF9", // ditambahkan
		  },
		  navy: {
			500: "#000080", // ditambahkan
		  },
		},
	  },
	},
	plugins: [],
  }
  