import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      colors: {
        "pink" : "#E01094",
        "rozowy": '#FF30B3',
        rozowyInny: '#7A0950',
        niebieski: '#0061FF',
        niebieskiInny: '#00D1FF',
        fioletowy: '#520951',
        zieliony: '#68FF3A',
        zielionyInny: '#228604',
        grayI: "gray-300",
      },
    },
  },
  plugins: [],
}

export default config
