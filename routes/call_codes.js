const log4js = require('log4js');
const logger = log4js.getLogger('Get Service Call Codes');
const serverConfig = require('../config/server.json');
const models = require('../models/index');

/**
 * Returns the entire set of call codes
 * @param {Request} req
 * @param {Object} req.params - Hash of query parameters
 * @param {string} req.params.limit - Max number of rows to return
 * @param {Response} res
 */
function get(req, res) {

  const initialParams = {
    limit: req.params.limit || serverConfig.resultLimit,
    where: {}
  };

  models.call_codes
    .findAll(initialParams)
    .then((calls) => {
      res.send(calls);
    });

  logger.debug(`Received: ${JSON.stringify(req.params)}`);
}

module.exports = {get};