// setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/_prog/openapi", {
      target: "https://tour.chungnam.go.kr",
      changeOrigin: true,
    })
  );

  // app.use(
  //   createProxyMiddleware("/api/breeds", {
  //     target: "https://dog.ceo",
  //     changeOrigin: true,
  //   })
  // );

  // app.use(
  //   createProxyMiddleware("/trends/trendingsearches", {
  //     target: "https://trends.google.co.kr",
  //     changeOrigin: true,
  //   })
  // );
};
