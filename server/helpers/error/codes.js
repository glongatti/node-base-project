import httpStatus from 'http-status';

const errors = {
  UNKNOWN_ERROR: {
    status: httpStatus.INTERNAL_SERVER_ERROR,
    code: 100,
    message: 'Unknown error',
  },
  FORBIDDEN: {
    status: httpStatus.FORBIDDEN,
    code: 101,
    message: 'Forbidden',
  },
  UNAUTHORIZED: {
    status: httpStatus.UNAUTHORIZED,
    code: 102,
    message: 'Unauthorized',
  },
  NOT_FOUND: {
    status: httpStatus.NOT_FOUND,
    code: 103,
    message: 'API not found',
  },
  DATABASE_ERROR: {
    status: httpStatus.INTERNAL_SERVER_ERROR,
    code: 104,
    message: 'Database error',
  },
  SPHERE_ERROR: {
    status: httpStatus.INTERNAL_SERVER_ERROR,
    code: 105,
    message: 'Sphere error',
  },
  EMAIL_ERROR: {
    status: httpStatus.BAD_REQUEST,
    code: 106,
    message: 'Email error',
  },
  BRASPAG_ERROR: {
    status: httpStatus.BAD_REQUEST,
    code: 107,
    message: 'Braspag error',
  },
  CONFIRMA_FACIL_ERROR: {
    status: httpStatus.BAD_REQUEST,
    code: 108,
    message: 'Confirma Facil error',
  },
  FILE_ERROR: {
    status: httpStatus.BAD_REQUEST,
    code: 109,
    message: 'Invalid file',
  },
  CACHE_FAIL: {
    status: httpStatus.INTERNAL_SERVER_ERROR,
    code: 110,
    message: 'Could not cache',
  },
  FILE_LIMIT_SIZE_ERROR: {
    status: httpStatus.BAD_REQUEST,
    code: 112,
    message: 'Invalid file limit size',
  },
  NOT_SUPPORT_EXTENSION: {
    status: httpStatus.BAD_REQUEST,
    code: 110,
    message: 'Invalid file extension',
  },
  INVALID_EMAIL: {
    status: httpStatus.BAD_REQUEST,
    code: 201,
    message: 'Invalid e-mail',
  },
  INVALID_CNPJ: {
    status: httpStatus.BAD_REQUEST,
    code: 202,
    message: 'Invalid CNPJ',
  },
  INVALID_CEP: {
    status: httpStatus.BAD_REQUEST,
    code: 203,
    message: 'Invalid cep',
  },
  INVALID_ADDRESS: {
    status: httpStatus.BAD_REQUEST,
    code: 204,
    message: 'Invalid address',
  },
  INVALID_PROVINCE: {
    status: httpStatus.BAD_REQUEST,
    code: 205,
    message: 'Invalid province',
  },
  INVALID_CITY: {
    status: httpStatus.BAD_REQUEST,
    code: 206,
    message: 'Invalid city',
  },
  INVALID_STATE: {
    status: httpStatus.BAD_REQUEST,
    code: 207,
    message: 'Invalid state',
  },
  INVALID_COUNTRY: {
    status: httpStatus.BAD_REQUEST,
    code: 208,
    message: 'Invalid country',
  },
  USER_INACTIVE: {
    status: httpStatus.BAD_REQUEST,
    code: 209,
    message: 'User is inactive',
  },
  MISSING_PARAMETERS: {
    status: httpStatus.BAD_REQUEST,
    code: 210,
    message: 'Missing parameters',
  },
  INVALID_PARAMETERS: {
    status: httpStatus.BAD_REQUEST,
    code: 211,
    message: 'Invalid parameters',
  },
  SOLICITATION_NOT_FOUND: {
    status: httpStatus.BAD_REQUEST,
    code: 300,
    message: 'Solicitation not found',
  },
  SOLICITATION_ALREADY_EXISTS: {
    status: httpStatus.BAD_REQUEST,
    code: 301,
    message: 'Solicitation already exists',
  },
  USER_NOT_FOUND: {
    status: httpStatus.BAD_REQUEST,
    code: 400,
    message: 'User not found',
  },
  USER_INVALID_FIRST_NAME: {
    status: httpStatus.BAD_REQUEST,
    code: 401,
    message: 'Invalid name',
  },
  USER_INVALID_LAST_NAME: {
    status: httpStatus.BAD_REQUEST,
    code: 402,
    message: 'Invalid last name',
  },
  USER_INVALID_PHONE: {
    status: httpStatus.BAD_REQUEST,
    code: 403,
    message: 'Invalid phone',
  },
  USER_ALREADY_EXISTS: {
    status: httpStatus.BAD_REQUEST,
    code: 404,
    message: 'User already exists',
  },
  USER_INVALID_NAME: {
    status: httpStatus.BAD_REQUEST,
    code: 405,
    message: 'Invalid name',
  },
  USER_INVALID_ROLE: {
    status: httpStatus.BAD_REQUEST,
    code: 406,
    message: 'Invalid role',
  },
  USER_INVALID_PASSWORD: {
    status: httpStatus.BAD_REQUEST,
    code: 407,
    message: 'Invalid password',
  },
  USER_HAS_NOT_REQUEST_RECOVER: {
    status: httpStatus.BAD_REQUEST,
    code: 408,
    message: 'User has not request a recover',
  },
  USER_OLD_PASSWORD_IS_DIFFERENT: {
    status: httpStatus.BAD_REQUEST,
    code: 409,
    message: 'User old password different',
  },
  USER_CLIENT_EXIST: {
    status: httpStatus.BAD_REQUEST,
    code: 410,
    message: 'User client already exist',
  },
  USER_HAS_CONTRACT: {
    status: httpStatus.BAD_REQUEST,
    code: 411,
    message: 'User contract already registered',
  },
  CLIENT_NOT_FOUND: {
    status: httpStatus.BAD_REQUEST,
    code: 500,
    message: 'Client not found',
  },
  CLIENT_LOCATION_NOT_FOUND: {
    status: httpStatus.BAD_REQUEST,
    code: 504,
    message: 'Client location not found',
  },
  CONTACT_NOT_FOUND: {
    status: httpStatus.BAD_REQUEST,
    code: 600,
    message: 'Contact not found',
  },
  CONTACT_INVALID_ROLE: {
    status: httpStatus.BAD_REQUEST,
    code: 601,
    message: 'Invalid contact role',
  },
  CONTACT_INVALID_SECTOR: {
    status: httpStatus.BAD_REQUEST,
    code: 602,
    message: 'Invalid contact sector',
  },
  REQUIRED_PARAMS_NOT_FOUND: {
    status: httpStatus.UNPROCESSABLE_ENTITY,
    code: 800,
    message: 'Required parameters not found',
  },
  ADMIN_NOT_FOUND: {
    status: httpStatus.BAD_REQUEST,
    code: 1300,
    message: 'Admin not found',
  },
  ADMIN_ALREADY_EXISTS: {
    status: httpStatus.BAD_REQUEST,
    code: 1301,
    message: 'Admin already exists',
  },
  ADMIN_NAME: {
    status: httpStatus.BAD_REQUEST,
    code: 1302,
    message: 'Invalid name',
  },
  ADMIN_EMAIL: {
    status: httpStatus.BAD_REQUEST,
    code: 1303,
    message: 'Invalid email',
  },
  ADMIN_PASSWORD: {
    status: httpStatus.BAD_REQUEST,
    code: 1304,
    message: 'Invalid password',
  },
};

export default errors;
