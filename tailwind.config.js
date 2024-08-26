export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)',
        'grad': 'radial-gradient(50.77% 5362.4993% at 49.23% 100.08%, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      },
      scrollbar: {
        hide: 'scrollbar-hide', // This is part of the plugin, not here
      },

      dropShadow: {
        'custom': '0 4px 0 rgba(56, 65, 95, 1)', // Adjust the offset and opacity as needed
      } 
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',     /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',  /* WebKit browsers */
          },
        },
      });
    },
  ],
}
