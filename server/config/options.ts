const options = {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? ['https://envite.dev'] : ['http://127.0.0.1:5173'],
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
    domain: process.env.APP_DOMAIN || 'http://127.0.0.1:5173',
  },
};

export default options;
