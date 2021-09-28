const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', { 
            target: 'http://localhost:8000', // 请求转发给谁
            changeOrigin:true, // 控制服务器接收到的请求头中Host的值
            pathRewrite: {'^/api' : ''} // 重写请求路径
        })
    )
}