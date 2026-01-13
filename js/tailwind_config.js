tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tatreez: {
          red: '#991B1B', // Deep red
          gold: '#D4AF37', // Gold/thread
          olive: '#556B2F', // Olive green
          cream: '#FEFDF5', // Natural linen
          charcoal: '#1A1A1A', // Deep black/grey
          sand: '#EDE8D0', // Sand/beige
        }
      },
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
        'nothing-you-could-do': ['"Nothing You Could Do"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    }
  }
}
