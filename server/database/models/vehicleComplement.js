export default (sequelize, type) => {
  const VehicleComplement = sequelize.define('VehicleComplement', {
    vehicleComplementItemId: {
      type: type.INTEGER,
      field: 'id_complemento',
    },
    vehicleId: {
      type: type.INTEGER,
      field: 'id_vehicle',
    },
    createdAt: {
      type: type.DATE,
      field: 'dt_inclusao',
    },
  },
  {
    tableName: 'tb_veiculos_complemento',
    freezeTableName: true,
  });

  VehicleComplement.associate = () => {
    // VehicleComplement.belongsTo(models.Vehicle, { as: 'vehicle', foreignKey: 'vehicleId' });
    // VehicleComplement.belongsTo(models.VehicleComplementItem,
    //   { as: 'complementItem', foreignKey: 'vehicleComplementItemId' });
  };
  return VehicleComplement;
};
