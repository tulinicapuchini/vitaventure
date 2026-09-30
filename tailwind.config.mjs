/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFCFB',
          100: '#FAF9F6',
          200: '#F4F2EC',
          300: '#EBE7DE',
        },
        slate: {
          850: '#151F32',
          900: '#0F172A',
          950: '#080D1A',
        },
        sage: {
          50: '#F2F7F4',
          100: '#E1EFE7',
          200: '#C2DFCE',
          500: '#2E7D52',
          600: '#1E633E',
          700: '#164E30',
          800: '#123D26',
          900: '#0E2E1D',
        },
        amber: {
          550: '#D97706',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#334155',
            lineHeight: '1.8',
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '700',
              color: '#0F172A',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              color: '#0F172A',
              letterSpacing: '-0.015em',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              color: '#1E293B',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            strong: {
              color: '#0F172A',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#164E30',
              borderLeftWidth: '3px',
              fontStyle: 'italic',
              color: '#1E293B',
              backgroundColor: '#F2F7F4',
              padding: '1rem 1.25rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            a: {
              color: '#164E30',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                color: '#2E7D52',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    import('@tailwindcss/typography'),
  ],
};
