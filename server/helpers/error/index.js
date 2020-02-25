import httpStatus from 'http-status';
import codeErrors from './codes';

/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor(message, code, status, details, stack, isPublic) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.message = message;
    this.details = details;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.

    if (stack) this.stack = stack;
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {String} errorCode - Error code.
   * @param {Object} details - Error details.
   * @param {Number} status - HTTP status code of error.
   * @param {Boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(errorCode, details, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
    let errorInfo = codeErrors[errorCode];
    let stack;
    if (!details) details = errorCode;
    if (details && details.stack) ({ stack } = details);
    if (details && details.message) details = details.message;
    if (!errorInfo) {
      errorInfo = codeErrors.UNKNOWN_ERROR;
      errorInfo.status = status || errorInfo.status;
    }

    super(errorInfo.message, errorInfo.code, errorInfo.status, details, stack, isPublic);
  }
}

export default APIError;
