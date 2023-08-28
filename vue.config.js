module.exports = {
    chainWebpack: config => {
      config.module
        .rule('pdf')
        .test(/\.(pdf)(\?.*)?$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/[name].[hash:8].[ext]'
        });

        
    },

    publicPath: process.env.NODE_ENV === "production" ? "/my-personal-web/" : "/",

    devServer: {
      host: '10.169.141.202',
    },
  };