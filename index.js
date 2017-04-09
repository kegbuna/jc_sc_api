const restify = require('restify');

const log4js = require('log4js');
const logger = log4js.getLogger('Server');

const models = require('./models');

const serverConfig = require('./config/server.json');


const server = restify.createServer({
  name: serverConfig.name
});

server.use(restify.queryParser());

const getCalls = require('./routes/service_calls.js').get;
server.get('/api/calls', getCalls);

const getCallCodes = require('./routes/call_codes').get;
server.get('/api/calls/codes', getCallCodes);

models.sequelize.sync().then(() => {
  server.listen(serverConfig.port, () => {
    logger.info(`${server.name} listening on ${serverConfig.port}`);
  });
});