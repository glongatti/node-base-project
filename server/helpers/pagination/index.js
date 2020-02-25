export function controllerPaginationHelper(req) {
  if (!req || !req.query) {
    return {
      offset: 0,
      limit: 10,
      isDESC: false,
      orderBy: undefined,
    };
  }
  return {
    offset: req.query.offset ? (req.query.offset * (req.query.limit ? parseInt(req.query.limit, 10) : 10)) : 0,
    limit: req.query.limit ? parseInt(req.query.limit, 10) : 10,
    isDESC: req.query.isDESC === 'true',
    orderBy: req.query.orderBy && req.query.orderBy.split('.'),
  };
}

export function serviceOrderHelper(searchParameters) {
  if (!searchParameters) return ['createdAt', 'ASC'];
  const order = (searchParameters.orderBy ? searchParameters.orderBy : ['createdAt']);
  order.push(searchParameters.isDESC ? 'DESC' : 'ASC');
  return order;
}
