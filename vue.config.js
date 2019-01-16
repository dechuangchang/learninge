
let env = process.env.NODE_ENV;
module.exports = {
    devServer: {
        host: '0.0.0.0', //ip
        disableHostCheck:env === 'production'? false:true,
        port: 8003 // 端口
    }
}

