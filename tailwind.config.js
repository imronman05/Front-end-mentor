/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '95': '95vh',
      }
    },
    borderRadius: {
      'lg': '0.5rem',
      '150': '150px',
      '120': '120px'
    },
    backgroundSize: {
      '11': '180rem',
      '16': '90rem',
      '20': '35.5rem',
      '20px': '690px',
      '21': '65rem',
      '22': '85rem'
    },
    backgroundPosition: {
      'top-1': 'left -14rem top -35rem',
      'top-2': 'left -25rem top -12rem',
      'top-3': 'left -6.5rem top -15rem',
      'top-4': 'left -125px top -328px',
      'top-5': 'left -25rem top -75rem',
      'top-6': 'left -50rem top -45rem',
      'top-7': 'left -15rem top -45rem'
    }
  },
  plugins: [],
}
