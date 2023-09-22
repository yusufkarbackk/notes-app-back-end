const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.Server({
    port: 8000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  // eslint-disable-next-line no-console
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
