/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green_A':'#5ECB75',
        'green_B':'#C9EED1',
        'gray_A':'#EAEAEA',
        'gray_B':'#E4E4E4',
        'gray_C':'#7D7D7D',
        'gray_D':'#C9EED1',        
        'black_A':'#272727'
      },
    },
  },
  plugins: [],
}
