/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Roboto']
		},
		fontSize: {
			sm: ['14px', '20px'],
			base: ['18px', '32px'],
			lg: ['20px', '28px'],
			xl: ['36px', '46px']
		},
		letterSpacing: {
			widest: '.15em'
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
