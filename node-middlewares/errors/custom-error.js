// CUSTOM ERROR CLASS THAT USES Error
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
}

// CustomAPIError -> error-handler middleware
// createCustomError -> tasks controller
module.exports = { createCustomError, CustomAPIError }
