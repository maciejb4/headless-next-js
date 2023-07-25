/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'testimonial-black' : '#231E1E',
        'testimonial-white' : '#F1F0F0',
        'testimonial-grey' : '#989898',
        'testimonial-purple' : '#DAC2F2',
        'testimonial-green' : '#5EDC4B'
      },
    },
  },
  plugins: [],
}
