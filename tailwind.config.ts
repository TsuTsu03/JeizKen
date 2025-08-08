import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Wedding Color Palette
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					foreground: 'hsl(var(--gold-foreground))'
				},
				'warm-brown': 'hsl(var(--warm-brown))',
				'medium-brown': 'hsl(var(--medium-brown))',
				'dusty-rose': 'hsl(var(--dusty-rose))',
				'rose-brown': 'hsl(var(--rose-brown))',
				'muted-pink': 'hsl(var(--muted-pink))',
				'soft-blush': 'hsl(var(--soft-blush))',
				'brick-red': 'hsl(var(--brick-red))',
				'soft-pink': 'hsl(var(--soft-pink))'
			},
			fontFamily: {
				display: ['var(--font-display)', 'serif'],
				body: ['var(--font-body)', 'sans-serif']
			},
			backgroundImage: {
				'gradient-elegant': 'var(--gradient-elegant)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-warm': 'var(--gradient-warm)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'soft': 'var(--shadow-soft)',
				'warm': 'var(--shadow-warm)'
			},
			transitionTimingFunction: {
				'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-scale': 'fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'underline-gold': 'underlineGold 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'float': 'parallaxFloat 6s ease-in-out infinite'
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
