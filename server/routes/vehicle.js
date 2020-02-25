import express from 'express';
import wrapper from '../helpers/wrappers/express';

import authMiddleware from '../middlewares/auth';

import VehicleController from '../controllers/vehicle';


const router = express.Router();

router.use(wrapper(authMiddleware));

router.route('/').get(wrapper([], VehicleController.getVehicles));

router.route('/count').get(wrapper(VehicleController.countStatus));

export default router;
