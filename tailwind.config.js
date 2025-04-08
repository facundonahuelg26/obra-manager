/** @type {import('tailwindcss').Config} */
import { heroui } from '@heroui/react'
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // App Router
    './src/pages/**/*.{js,ts,jsx,tsx}', // Pages Router
    './src/features/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: '#F4F4F5',
            foreground: '#111827',
            primary: {
              DEFAULT: '#357de8',
              foreground: '#111827',
            },
            secondary: {
              DEFAULT: '#48245d',
            },
            accent: {
              DEFAULT: '#00E7C6',
            },
            border: '#D1D5DB',
            muted: '#6B7280',
            card: '#FFFFFF',
            success: {
              DEFAULT: '#b3df72',
            },
            warning: {
              DEFAULT: '#FFC107',
            },
            danger: {
              DEFAULT: '#F15B50',
            },
          },
          layout: {
            radius: {
              small: '4px',
              medium: '4px',
              large: '4px',
              full: '4px',
            },
          },
        },
        dark: {
          colors: {
            background: '#1f1f21',
            foreground: '#E5E7EB',
            content1: '#242528',
            primary: {
              DEFAULT: '#669df1',
              foreground: '#292a2e',
            },
            secondary: {
              DEFAULT: '#cc95e9',
              foreground: '#292a2e',
            },
            accent: {
              DEFAULT: '#1a212b',
            },
            border: '#24292E',
            muted: '#1a212b',
            card: '#1a212b',
            success: {
              DEFAULT: '#b3df72',
            },
            warning: {
              DEFAULT: '#FFCA28',
            },
            danger: {
              DEFAULT: '#F15B50',
            },
          },
          layout: {
            radius: {
              small: '4px',
              medium: '4px',
              large: '4px',
              full: '4px',
            },
          },
        },
      },
    }),
  ],
}
