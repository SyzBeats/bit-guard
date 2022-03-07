/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  workspaceRoot: '/react-ui',
  mount: {
    /* ... */
    public: {
      url: '/',
      static: true,
    },
    src: {
      url: '/dist',
    },
    'public/fonts': '/fonts',
  },
  plugins: ['@snowpack/plugin-typescript', '@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    hmr: true,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
