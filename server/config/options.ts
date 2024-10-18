const localOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173', 'chrome-extension://ighklpeepmlefngjceekopegipffehck'];

const productionOrigins = ['https://envite.dev', 'chrome-extension://ighklpeepmlefngjceekopegipffehck'];

const options = {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? productionOrigins : localOrigins,
    credentials: true,
  },
  server: {
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost:4000',
    protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
    endpoint: '/graphql',
    limit: '800kb',
  },
  app: {
    domain: process.env.APP_DOMAIN || 'http://127.0.0.1:5173',
  },
};

export default options;
