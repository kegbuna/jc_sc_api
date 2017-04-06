const log4js = require('log4js');
const logger = log4js.getLogger('Get Service Calls');
const serverConfig = require('../../config/server.json');
const models = require('../../models');

/**
 * Retrieves calls according to the
 * @param {Request} req
 * @param {Response} res
 */
function getCalls(req, res) {

  let findAllParams = {
    limit: serverConfig.resultLimit,
    where: {}
  };

  findAllParams = Object.keys(req.params).reduce((previousValue, currentValue, array) => {
    switch (currentValue) {
      case 'time_received_start':
        previousValue.where.time_received = previousValue.where.time_received || {};
        previousValue.where.time_received.$gte = req.params[currentValue];
        break;
      case 'time_received_end':
        previousValue.where.time_received = previousValue.where.time_received || {};
        previousValue.where.time_received.$lte = req.params[currentValue];
        break;
      case 'time_dispatched_start':
        previousValue.where.time_dispatched = previousValue.where.time_dispatched || {};
        previousValue.where.time_dispatched.$gte = req.params[currentValue];
        break;
      case 'time_dispatched_end':
        previousValue.where.time_dispatched = previousValue.where.time_dispatched || {};
        previousValue.where.time_dispatched.$lte = req.params[currentValue];
        break;
      case 'time_arrived_start':
        previousValue.where.time_arrived = previousValue.where.time_arrived || {};
        previousValue.where.time_arrived.$gte = req.params[currentValue];
        break;
      case 'time_arrived_end':
        previousValue.where.time_arrived = previousValue.where.time_arrived || {};
        previousValue.where.time_arrived.$lte = req.params[currentValue];
        break;
      case 'latitude_start':
        previousValue.where.latitude = previousValue.where.latitude || {};
        previousValue.where.latitude.$gte = req.params[currentValue];
        break;
      case 'latitude_end':
        previousValue.where.latitude = previousValue.where.latitude || {};
        previousValue.where.latitude.$lte = req.params[currentValue];
        break;
      case 'longitude_start':
        previousValue.where.longitude = previousValue.where.longitude || {};
        previousValue.where.longitude.$gte = req.params[currentValue];
        break;
      case 'longitude_end':
        previousValue.where.longitude = previousValue.where.longitude || {};
        previousValue.where.longitude.$lte = req.params[currentValue];
        break;
      default:
        logger.warn(`Unsupported parameter received: ${currentValue}`);
    }

    return previousValue;
  }, findAllParams);

  models.service_calls
    .findAll(findAllParams)
    .then((calls) => {
      res.send(calls);
    });

  logger.debug(`Received: ${JSON.stringify(req.params)}`);
}

module.exports = getCalls;