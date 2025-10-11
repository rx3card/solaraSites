import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta premium profesional
        primary: '#0071e3',        // Azul Apple - Principal
        primaryLight: '#2196F3',   // Azul claro hover
        primaryDark: '#0051a8',    // Azul oscuro
        secondary: '#7C3AED',      // Morado elegante
        secondaryLight: '#A78BFA', // Morado claro
        accent: '#06B6D4',         // Cyan para acentos
        success: '#10B981',        // Verde (mantenemos)
        
        // DORADO PREMIUM
        gold: '#FFD700',           // Dorado principal
        goldLight: '#FFE55C',      // Dorado claro brillante
        goldDark: '#B8860B',       // Dorado oscuro elegante
        goldPremium: '#FFC107',    // Dorado premium
        
        bgMain: '#000000',         // Negro puro
        bgCard: '#0a0a0a',         // Gris muy oscuro para cards
        surface: '#141414',        // Surface level 1
        surfaceLight: '#1e1e1e',   // Surface level 2
        textPrimary: '#ffffff',    // Blanco puro
        textSecondary: '#a0a0a0',  // Gris medio
        textTertiary: '#6b6b6b',   // Gris oscuro
        border: '#2a2a2a',         // Border sutil
        borderLight: '#3a3a3a',    // Border hover
        
        // Deprecated (mantener por compatibilidad temporal)
        solaraOrange: '#0071e3',
        solaraGold: '#7C3AED',
        solaraBlue: '#2196F3',
        solaraPurple: '#A78BFA',
        solaraPink: '#EC4899',
        solaraGreen: '#10B981',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        display: ['var(--font-poppins)', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'gradient': 'gradient 8s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 140, 41, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 140, 41, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)',
            transform: 'scale(1.05)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
