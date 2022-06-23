const path = require('path');

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },

  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  distDir: 'build',
  trailingSlash: true,
  reactStrictMode: false,
  env: {
    BASE_URL_API: process.env.NEXT_PUBLIC_BASE_URL_API,
    PATH_VERSION_API: process.env.NEXT_PUBLIC_PATH_VERSION_API,
  },
  experimental: {
    esmExternals: false,
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(
        __dirname,
        './node_modules/apexcharts-clevision'
      ),
    };

    return config;
  },
};
