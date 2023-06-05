module.exports = {
  content: {
    relative: true,
    files: [
      './css/*.css',
      './templates/**/*.{html,twig}',
      './../../modules/lundimatin-blocks/templates/**/*.{html,twig}',
      './../../modules/module-custom-lmb/templates/**/*.{html,twig}',
    ]
  },
  safelist: [
    'alert-success',
    'alert-error',
    'alert-warning',
    'alert-info',
    'bg-success',
    'bg-error',
    'bg-warning',
    'bg-info',
  ],
  theme: {
    fontFamily: {
      'default': ['Muli', 'Roboto', 'sans-serif'],
      'body': ['Muli', 'Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#eeeeee',
        'primary-light': '#efefef',
        'error': '#CC0000',
        'warning': '#FF8800',
        'success': '#36d399',
        'info': '#3abff8'
      }
    },
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
