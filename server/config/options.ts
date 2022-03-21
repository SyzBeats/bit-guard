const options = {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? ['https://envite.dev'] : ['http://localhost:8080'],
    credentials: true,
  },
  server: {
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost:4000',
    protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
    endpoint: '/graphql',
    limit: '100kb',
  },
  app: {
    domain: process.env.APP_DOMAIN || 'http://localhost:8080',
  },
};

export default options;
