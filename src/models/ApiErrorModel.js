/**
 * Creates an API error model with the given status, message, description, and solution.
 *
 * @param {number} status - The status code of the error
 * @param {string} message - The error message
 * @param {string} [description=''] - The description of the error
 */
export function GetModelApiError(status, message, description = '') {
    return {
      status,
      message,
      description,
    };
  }
  