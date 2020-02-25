export default (sequelize, type) => {
  const Vehicle = sequelize.define('Vehicle', {
    vehicleId: {
      type: type.INTEGER,
      primaryKey: true,
      unique: true,
      field: 'id',
    },
    advertiserId: {
      type: type.INTEGER,
      field: 'id_anunciante',
    },
    vehicleStatusId: {
      type: type.INTEGER,
      field: 'id_statusvei',
    },
    licensePlate: {
      type: type.STRING,
      field: 'placa',
    },
    category: {
      type: type.STRING,
      field: 'categoria',
    },
    condition: {
      type: type.STRING,
      field: 'tipo',
    },
    fabricationYear: {
      type: type.STRING,
      field: 'ano_fabrica',
    },
    modelYear: {
      type: type.STRING,
      field: 'ano_modelo',
    },
    source: {
      type: type.STRING,
      field: 'origem',
    },
    gearboxType: {
      type: type.STRING,
      field: 'cambio',
    },
    brand: {
      type: type.STRING,
      field: 'marca',
    },
    model: {
      type: type.STRING,
      field: 'modelo',
    },
    version: {
      type: type.STRING,
      field: 'versao',
    },
    fuel: {
      type: type.STRING,
      field: 'combustivel',
    },
    doorsQuantity: {
      type: type.INTEGER,
      field: 'porta',
    },
    color: {
      type: type.STRING,
      field: 'cor',
    },
    motorization: {
      type: type.STRING,
      field: 'motorizacao',
    },
    km: {
      type: type.INTEGER,
      field: 'km',
    },
    soldDate: {
      type: type.DATE,
      field: 'datacompra',
    },
    molicarCode: {
      type: type.STRING,
      field: 'codigo_molicar',
    },
    note: {
      type: type.STRING,
      field: 'observacao',
    },
    createdAt: {
      type: type.DATE,
      field: 'datacadastro',
    },
    boughtPrice: {
      type: type.FLOAT,
      field: 'valor_compra',
    },
    createdBy: {
      type: type.STRING,
      field: 'usuario_inclusao',
    },
    updatedBy: {
      type: type.STRING,
      field: 'usuario_alteracao',
    },
    registerPlace: {
      type: type.STRING,
      field: 'local_registro',
    },
    showroom: {
      type: type.STRING,
      field: 'showroom',
    },
    report: {
      type: type.STRING,
      field: 'laudo',
    },
    physicalStore: {
      type: type.INTEGER,
      field: 'loja_fisica',
    },
    startingPrice: {
      type: type.FLOAT,
      field: 'valor_inicial',
    },
    CRVisOK: {
      type: type.STRING,
      field: 'crv_ok',
    },
    chassis: {
      type: type.STRING,
      field: 'chassi',
    },
    renavam: {
      type: type.STRING,
      field: 'renavam',
    },
    mveiculoCode: {
      type: type.STRING,
      field: 'codigoMveic',
    },
    integrationDate: {
      type: type.DATE,
      field: 'data_integracao',
    },
    externalValuation: {
      type: type.INTEGER,
      field: 'nro_avaliacao_externa',
    },
    webReferencePrice: {
      type: type.FLOAT,
      field: 'valor_ref_web',
    },
    fipeReferenceCode: {
      type: type.STRING,
      field: 'cod_ref_fipe',
    },
    fipeReferencePrice: {
      type: type.FLOAT,
      field: 'valor_ref_fipe',
    },
    optionals: {
      type: type.TEXT,
      field: 'opcionais',
    },
    picture: {
      type: type.STRING,
      field: 'foto',
    },
    pictureQuantity: {
      type: type.INTEGER,
      field: 'qtde_fotos',
    },
    participantId: {
      type: type.INTEGER,
      field: 'id_participante',
    },
    singleOwner: {
      type: type.INTEGER,
      field: 'unico_dono',
    },
    autopayFinancial: {
      type: type.INTEGER,
      field: 'autopay_financiamento',
    },
    armoured: {
      type: type.INTEGER,
      field: 'blindado',
    },
    descriminatedIVA: {
      type: type.INTEGER,
      field: 'iva_discriminado',
    },
    valuationQuality: {
      type: type.FLOAT,
      field: 'qualidade_avaliacao',
    },
    CO2Emission: {
      type: type.FLOAT,
      field: 'emissao_co2',
    },
    maisQueClientesVehicle: {
      type: type.INTEGER,
      field: 'veiculo_mais_que_clientes',
    },
    deliveredVehicle: {
      type: type.DATE,
      field: 'veiculo_entregue',
    },
    vehicleInBidApproval: {
      type: type.INTEGER,
      field: 'veiculo_processo_aprovacao_lance',
    },
    audio: {
      type: type.STRING,
      field: 'audio',
    },
    picture360: {
      type: type.TEXT,
      field: 'fotos360',
    },
  }, {
    tableName: 'tb_veiculos',
    freezeTableName: true,
    timestamps: false,
  });

  Vehicle.associate = () => {
    // Vehicle.belongsToMany(models.VehicleComplementItem,
    //   { through: { as: 'complements', model: models.VehicleComplementItem } });
    // Vehicle.belongsToMany(models.VehicleInspectionItem,
    //   { as: 'inspectedItens', through: { model: models.VehicleInspection } });
    // Vehicle.belongsToMany(models.VehicleOptionalItem,
    //   { as: 'optionalItens', through: { model: models.VehicleOptional } });
    // Vehicle.hasMany(models.VehiclePicture, { as: 'pictures', foreignKey: 'vehicleId' });
    // Vehicle.hasOne(models.VehicleMotorcycle);
    // Vehicle.hasOne(models.VehicleHeavy);
    // Vehicle.belongsToMany(models.Ad, { as: 'ads', through: models.AdVehicle, foreignKey: 'vehicleId' });
  };
  return Vehicle;
};
