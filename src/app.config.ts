export default () => {
  const { PORT, NODE_ENV, DATABASE_URL } = process.env;
  return {
    PORT: PORT != null ? parseInt(PORT, 10) : 3000,
    NODE_ENV: NODE_ENV != null ? NODE_ENV : 'development',
    DATABASE_URL,
  };
};
