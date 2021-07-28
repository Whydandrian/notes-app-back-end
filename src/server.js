const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// Inisiasi server menggunakan hapi
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // import route configuration
  server.route(routes);

  // menampilkan server running pada server local
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();