const restify = require('restify');

const log4js = require('log4js');
const logger = log4js.getLogger('Server');

const models = require('./models');

const serverConfig = require('./config/server.json');


const server = restify.createServer({
  name: serverConfig.name
});

server.use(restify.queryParser());

const getCalls = require('./routes/calls/get.calls');
server.get('/api/calls', getCalls);

models.sequelize.sync().then(() => {
  server.listen(serverConfig.port, () => {
    logger.info(`${server.name} listening on ${serverConfig.port}`);
  });
});