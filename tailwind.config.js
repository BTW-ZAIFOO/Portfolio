/** @type {import('tailwindcss').Config} */
export const content = [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        fontFamily: {
            'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
            'geist-mono': ['var(--font-geist-mono)', 'monospace'],
            'plus-jakarta': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        },
    },
};
export const plugins = [];
