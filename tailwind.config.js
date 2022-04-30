const { fontFamily } = require('tailwindcss/defaultTheme')
function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}
module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './modules/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Poppins', ...fontFamily.sans],
            },
            lineHeight: {
                h1: '3.37rem',
            },
            zIndex: {
                100: '100',
            },

            fontSize: {
                halfWidth: 'clamp(2rem, 5vw, 10rem)',
            },
            maxWidth: {
                track: '25ch',
            },
            colors: {
                primary: {
                    // Customize it on globals.css :root
                    400: withOpacity('--tw-clr-primary-400'),
                    500: withOpacity('--tw-clr-primary-500'),
                },
                fantasticRed: '#A73938',
                fantasticDeepRed: '#180808',
                fantasticBlue: '#0C6796',
                fantasticWashedBlue: '#0f78f3',
                fantasticDeepBlue: '#00142b9c',
                fantasticMustard: '#DA9E3B',
                fantasticOcean: '#50A0A4',
                fantasticBg: '#000707',
                offWhite: '#F8F8F8',
                blueHover: '#0054B7',
                dark: '#000000',
            },
            fontSize: {
                sm: ['14px', '20px'],
                base: ['16px', '24px'],
                lg: ['20px', '28px'],
                xl: ['24px', '32px'],
            },
            keyframes: {
                flicker: {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
                        opacity: 0.99,
                        filter: 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
                    },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
                        opacity: 0.4,
                        filter: 'none',
                    },
                },
            },
            animation: {
                flicker: 'flicker 3s linear infinite',
            },

            plugins: [],
        },
    },
}
