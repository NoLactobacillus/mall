module.exports = {
  configureWebpack: {
    resolve: {
      //配置可忽略引入后缀名
      extensions: ['.js', '.vue', '.json'], 
      //配置别名 方便引入文件
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}