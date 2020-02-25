import jwt from 'jsonwebtoken';
import APIError from '../helpers/error';

export default async function Auth(req) {
  if (req.query.token && !req.headers.authentication) {
    req.headers.authentication = req.query.token;
  }
  jwt.verify(req.headers.authentication, process.env.JWT_KEY_AUTH, (err, decoded) => {
    if (err || !decoded.userId) {
      throw new APIError('UNAUTHORIZED');
    }
    req.userId = decoded.userId;
  });
  // add advertiser id into req
}
