/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('call_codes', {
    type: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.TEXT
    },
    pd_code: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'call_codes',
    timestamps: false
  });
};
