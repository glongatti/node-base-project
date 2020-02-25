import Promise from 'bluebird';
import util from 'util';

export default function wrapper(middlewares, ctrl) {
  if (!util.isArray(middlewares)) {
    middlewares = [middlewares];
  }
  return (...args) => Promise
    .mapSeries(middlewares, m => m(...args))
    .then(async () => {
      if (!ctrl) {
        return args[2]();
      }
      return ctrl(...args);
    })
    .catch(args[2]);
}
