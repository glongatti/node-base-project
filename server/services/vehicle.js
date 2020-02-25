import VehicleRepository from '../database/dao/vehicle';
import { serviceOrderHelper } from '../helpers/pagination';

export default class VehicleService {
  static async getAllWithPagination(searchParameters) {
    let response = null;
    // Filters
    let where = {
      advertiserId: searchParameters.advertiserId,
    };
    // Filter based on text search can be: licensePlate, brand, model.
    where = { ...where };
    // Pagination
    response = await VehicleRepository.selectWithPagination({
      where,
      attributes: [
        'vehicleId', 'picture', 'gearboxType', 'vehicleStatusId',
        'model', 'brand', 'version', 'fuel', 'condition',
        'km', 'motorization', 'licensePlate', 'boughtPrice',
      ],
      offset: searchParameters.offset,
      limit: searchParameters.limit,
      order: [serviceOrderHelper(searchParameters)],
    });
    return response;
  }
}
