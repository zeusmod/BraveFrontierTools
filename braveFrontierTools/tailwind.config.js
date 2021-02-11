const plugin = require('tailwindcss/plugin');
module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        screens: {
          xs: '360px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },

        colors: {
          blackCardUnit: '#2C2C2C',  //423D3D
          fireColor: '#FE2E2E',
          waterColor: '#3471EB',
          earthColor: '#04B404',
          lightningColor: '#F3F781',
          lightColor: '#BFBFBF',
          darkColor: '#D0A9F5',
          stars: '#FEF505'
        },

        gridTemplateRows: {
          '10': 'minmax(10px, 1fr)',
        },
        gridTemplateColumns: {
          // Simple 16 column grid
         '16': 'repeat(10, calc(15% * 1))',
        },
        spacing: {
          '120': '30rem',
        }
      },
    },
    variants: {
      extend: {
        borderRadius: ['responsive', 'important'],
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      plugin(function({ addVariant }) {
        addVariant('important', ({ container }) => {
          container.walkRules(rule => {
            rule.selector = `.\\!${rule.selector.slice(1)}`
            rule.walkDecls(decl => {
              decl.important = true
            })
          })
        })
      })
    ],
};
