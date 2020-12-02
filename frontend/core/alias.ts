const aliases = (prefix = `src`) => ({
  '@components': `${ prefix }/components`,
  '@graphql': `${ prefix }/graphql`,
  '@requests': `${ prefix }/graphql/requests`,
  '@layout': `${ prefix }/layout`,
  '@styles': `${ prefix }/styles`,
  '@icons': `${ prefix }/components/icons`,
  '@utils': `${ prefix }/utils`,
  '@layoutComponents': `${ prefix }/layout/internal`,
  '@context': `${ prefix }/context`,
  '@interface': `${ prefix }/interface`,
  '@locales': `${ prefix }/locales`,
  '@pages': `${ prefix }/pages`,
  '@assets': `${ prefix }/assets`
})

module.exports = aliases
