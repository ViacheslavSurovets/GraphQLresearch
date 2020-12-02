const path = require('path')
const alias = require(path.resolve('core/alias.ts'))
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const aliases =  alias('./src')

// @ts-ignore
const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
)

module.exports = {
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
    },
    webpack: {
        alias: resolvedAliases
    }
}
