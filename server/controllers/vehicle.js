import VehicleService from '../services/vehicle';
import responseHelper from '../helpers/response';
import { controllerPaginationHelper } from '../helpers/pagination';

export default class VehicleController {
  static async countStatus(req, res) {
    const { status } = req.query;
    const response = await VehicleService.countByStatus(status);
    return res.json(responseHelper.success(response));
  }

  static async getVehicles(req, res) {
    const searchParameter = {
      ...controllerPaginationHelper(req),
    };
    searchParameter.advertiserId = req.advertiserId;
    const response = await VehicleService.getAllWithPagination(searchParameter);
    return res.json(responseHelper.success(response));
  }
}
