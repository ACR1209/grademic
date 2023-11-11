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
      colors: {
            "grademic-red": {
              "900": "#F7212F",
              "800": "#F95862",
              "700": "#FB8E95",
              "600": "#FDBABE",
            },
            "grademic-yellow": {
              "900": "#CC9300",
              "800": "#F7B200",
              "700": "#FFC329",
              "600": "#FFD15C",
            },
            "grademic-black": {
              "900": "#0D1015",
              "800": "#131820",
              "700": "#1D242F",
              "600": "#27303F",
            },
            "grademic-white": {
              "900": "#FFFFFF",
              "800": "#E6E6E6",
              "700": "#CCCCCC",
              "600": "#B3B3B3",
            },
            "grademic-green": {
              "800": "#7CFA88"
            }
      }

    },
  },
  plugins: [],
}
export default config
