module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'outline-primary': '0 0 0 2px rgba(127, 86, 217, 0.5)',
        btn: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        card: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        table:
          '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      },
      colors: {
        primary: {
          light: '#9a74ec',
          DEFAULT: '#7F56D9',
          dark: '#5d39ac',
        },
        'dark-text': '#101828',
        'secondary-text': '#344054',
        'light-text': '#667085',
        grey: '#f9fafb',
        'border-nav': '#EAECF0',
        'border-btn': '#D0D5DD',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
