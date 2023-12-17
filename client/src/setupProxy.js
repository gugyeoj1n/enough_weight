const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:7676',
      changeOrigin: true,
    })
  );

  app.use(
    '/article',
    createProxyMiddleware({
      target: 'http://localhost:7676',
      changeOrigin: true,
    })
  );
};