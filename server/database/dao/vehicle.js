import db from '../database';

const VehicleEntity = db.models.Vehicle;

export default class VehicleRepository {
  static async findVehicle(query, opts = {}) {
    return VehicleEntity.findOne({
      where: query,
      ...opts,
    });
  }

  static async findVehicles(query, opts = {}) {
    return VehicleEntity.findAll({
      where: query,
      ...opts,
    });
  }

  static async countAll(query, opts = {}) {
    return VehicleEntity.count({
      where: query,
      ...opts,
    });
  }

  static async updateVehicle(queryUpd, query, opts = {}) {
    return VehicleEntity.update(queryUpd, {
      where: query,
      ...opts,
    });
  }

  static async createVehicles(vehicles, opts = {}) {
    return VehicleEntity.bulkCreate(vehicles, opts);
  }

  static async createVehicle(vehicle, opts = {}) {
    return VehicleEntity.create(vehicle, opts);
  }

  static async selectWithPagination(options) {
    options = { ...options };
    const response = await VehicleEntity.findAndCountAll(options);
    return response;
  }

  static async literal(query) {
    return db.sequelize.query(query);
  }
}
