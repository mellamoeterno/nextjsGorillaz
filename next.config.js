const expressServer = require('./server');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${expressServer.path}/:path*`,
      },
    ];
  },
};
