import type { Config } from 'tailwindcss';
// You must import the default theme to extend it correctly
import defaultTheme from 'tailwindcss/defaultTheme'; 

const config: Config = {
  // Ensure your content paths are correct here
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // CRITICAL FIX: Overriding the default 'sans' font family
      fontFamily: {
        // This prepends 'Poppins' to the list, followed by Tailwind's default sans-serif fallbacks.
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      // You can add other theme extensions here if needed
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;