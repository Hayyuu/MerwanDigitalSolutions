const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // SERVER
      // target: 'http://client78958.golpik.net:3048',
      target:
        //  "http://3.88.115.106:5000",
      "http://localhost:5000/",
        // "https://b738-2400-adc1-1df-f800-39d2-8280-5583-c392.ngrok-free.app",
      // LOCAL
      // target: 'http://apidarkhorse.192.168.100.24.nip.io',
      changeOrigin: true,
    })
  );
};