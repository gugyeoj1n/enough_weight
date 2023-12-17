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

  app.use(
    '/search',
    createProxyMiddleware({
      target: 'http://localhost:7676',
      changeOrigin: true,
    })
  );

  app.use(
    '/following',
    createProxyMiddleware({
      target: 'http://localhost:7676',
      changeOrigin: true,
    })
  );

  app.use(
    '/routine',
    createProxyMiddleware({
      target: 'http://localhost:7676',
      changeOrigin: true,
    })
  );

  app.use(
    '/feed',
    createProxyMiddleware({
      target: 'http://localhost:7676',
      changeOrigin: true,
    })
  );

  app.use(
    '/profile',
    createProxyMiddleware({
      target: 'http://localhost:7676',
      changeOrigin: true,
    })
  );
};