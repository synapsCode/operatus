/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			red: '#DB334A',
			dark: '#302D38',
			gray: {
				100: '#9C9EA1',
				400: '#787878',
				500: '#49454f'
			}
		},
		fontFamily: {
			sans: ['Roboto']
		},
		fontSize: {
			sm: ['14px', '27px'],
			base: ['16px', '25px'],
			lg: ['18px', '28px'],
			xl: ['20px', '46px'],
			'2xl': ['36px', '46px']
		},
		letterSpacing: {
			widest: '.17em'
		},
		extend: {
			dropShadow: {
				'3xl': '0 2px 2px rgba(0, 0, 0, 0.25)',
				'4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)']
			}
		}
	},
	plugins: []
};
