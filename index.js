const restify = require('restify');
const log4js = require('log4js');

const initSequelize = require('./sequelize.init');

const serverConfig = require('./config/server.json');


const server = restify.createServer({
  name: serverConfig.name
});
const logger = log4js.getLogger('Server');

server.get('/api/calls', (req, res) => {
  logger.debug(`Received: ${req.toString()}`);
  res.json(200, {
    sup: 'hi'
  });
});

initSequelize().subscribe((sequelize) => {
  server.listen(serverConfig.port, () => {
    logger.info(`${server.name} listening on ${serverConfig.port}`);
  });
});