/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('call_codes', {
    type: {
      type: DataTypes.TEXT,
      primaryKey: true
    },
    pd_code: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'call_codes'
  });
};
