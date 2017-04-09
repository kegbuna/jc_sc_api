/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_calls', {
    event_number: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    district: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_received: {
      type: DataTypes.TIME,
      allowNull: true
    },
    shift: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time_dispatched: {
      type: DataTypes.TIME,
      allowNull: true
    },
    time_arrived: {
      type: DataTypes.TIME,
      allowNull: true
    },
    callcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_code_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: true
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    geo_error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    geo_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated: {
      type: DataTypes.TIME,
      allowNull: true
    },
    callcode_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'call_codes',
        key: 'type'
      }
    },
    callcode_pd_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'call_codes',
        key: 'pd_code'
      }
    }
  }, {
    tableName: 'service_calls',
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });
};
