const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use('/api/*', createProxyMiddleware(
        { target: 'https://[::1]:5000/' }
    ));
    // const socketProxy= createProxyMiddleware('/socket.io/*', {
    //     target: 'ws://localhost:5000/',
    //     changeOrigin: true,
    //     ws: true, 
    //     logLevel: 'debug',
    //   });
    // app.use(socketProxy);
    app.use(proxy("/websocket", {target: "http://localhost:8080", ws: true}));
    app.use('/auth/google', createProxyMiddleware( 
        { target: 'https://localhost:5000/' }
    ));
    
}