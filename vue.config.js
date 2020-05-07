module.exports = {
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/portal/'
      : '/'
  }