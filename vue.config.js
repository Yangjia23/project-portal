module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/portal/'
      : '/',
    chainWebpack: (config)=>{
      config.resolve.alias
        .set('@$', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
    }
}