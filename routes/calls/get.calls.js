const log4js = require('log4js');
const logger = log4js.getLogger('Get Service Calls');

const models = require('../../models');

/**
 * Retrieves calls according to the
 * @param {Request} req
 * @param {Response} res
 */
function getCalls(req, res) {
    logger.debug(`Received: ${JSON.stringify(req.params)}`);
    models.service_calls
      .findAll({
        limit: 500
      })
      .then((calls) => {
        res.send(calls);
      });
}

module.exports = getCalls;