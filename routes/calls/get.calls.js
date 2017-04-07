const log4js = require('log4js');
const logger = log4js.getLogger('Get Service Calls');
const serverConfig = require('../../config/server.json');
const models = require('../../models');

/**
 * Retrieves calls according to the provided parameters
 * @param {Request} req
 * @param {string} req.params.district - Comma delimited list of district abbreviations
 * @param {Date} req.params.time_received_start - The lower bound of the time received column
 * @param {Date} req.params.time_received_end - The upper bound of the time received column
 * @param {Date} req.params.time_dispatched_start - The lower bound of the time dispatched column
 * @param {Date} req.params.time_dispatched_end - The upper bound of the time dispatched column
 * @param {number} req.params.latitude_start - The lower bound of the latitude column
 * @param {number} req.params.latitude_end - The upper bound of the latitude column
 * @param {number} req.params.longitude_start - The lower bound of the longitude column
 * @param {number} req.params.longitude_end - The upper bound of the longitude column
 * @param {Response} res - The response object
 */
function getCalls(req, res) {

  const initialParams = {
    limit: serverConfig.resultLimit,
    where: {}
  };

  const findAllParams = Object.keys(req.params).reduce((previousValue, currentValue) => {
    switch (currentValue) {
      case 'district':
        previousValue.where.district = previousValue.where.district || {};
        previousValue.where.district = req.params[currentValue].split(',');
        break;
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
  }, initialParams);

  models.service_calls
    .findAll(findAllParams)
    .then((calls) => {
      res.send(calls);
    });

  logger.debug(`Received: ${JSON.stringify(req.params)}`);
}

module.exports = getCalls;