const commerce = require('./commerce.config.json')
const { withCommerceConfig } = require('./commerce-config')

module.exports = withCommerceConfig({
  commerce,
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  rewrites() {
    return [
      {
        source: '/checkout',
        destination: '/api/commerce/checkout',
      },
    ]
  },
})
