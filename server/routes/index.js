import express from 'express';

import config from '../../config/config';

// import wrapper from '../helpers/wrappers/express';

import vehiclesRoutes from './vehicle';

import pkg from '../../package.json';

const router = express.Router();
const startedAt = Date.now();

router.get('/', (req, res) => res.json({
  name: `${config.name}-${pkg.name}`,
  version: pkg.version,
  env: config.env,
  uptime: Date.now() - startedAt,
  cacheTTL: config.defaultTTLcache,
}));

router.use('/vehicle', vehiclesRoutes);

export default router;
