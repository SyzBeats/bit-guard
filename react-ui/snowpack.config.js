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
  },
  plugins: [['@snowpack/plugin-typescript'], '@snowpack/plugin-react-refresh'],
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
