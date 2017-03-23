const Sequelize = require('sequelize');
const log4js = require('log4js');
const Observable = require('rxjs/Observable').Observable;
const ReplaySubject = require('rxjs/ReplaySubject').ReplaySubject;
require('rxjs/add/observable/fromPromise');

const config = require('./config/sequelize.json');

const logger = log4js.getLogger('Init Sequelize');

/**
 * Inits sequelize and returns it in an observable
 * @returns {Observable<Sequelize>}
 */
function initSequelize() {
  const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect
  });

  //sync db connection then return instance
  return new ReplaySubject(Observable.fromPromise(sequelize.sync().then(() => {
    logger.info('Database connection initialized.');
    return sequelize;
  })));
}

module.exports = initSequelize;