/** @type {import('tailwindcss').Config} */
module.exports = {

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
                navyshadow: "rgba(2, 12, 27, 0.7)",
                backgroundcolor: "#220c36",
                lightestnavy: "#452472",
                lightnavy: "#112240",
                darkslate: "#495670",
                slate: "#8892b0",
                lightslate: "#ccd6f6",
                lightestslate: "#a8b2d1",
                themecolor: "#ad36f7",

            },
            fontFamily : {
                'fira' : "'Fira Code', monospace",
                'inter' : "'Inter', sans-serif",
            }
        },



    
    }
}
