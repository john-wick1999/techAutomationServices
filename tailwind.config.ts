import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'cmd'  : '1440px',
        'cmdm' : '900px',
        '2-5xl': '1750px',
        '3xl'  : '2000px',
        '3-5xl': '2200px',
        '4xl'  : '3000px'
      },
      blur: {
        xs: '1px',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem'
      }
    },
  },
  plugins: [],
}
export default config
