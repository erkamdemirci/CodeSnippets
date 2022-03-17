const { CustomAPIError } = require('../errors/custom-error')

// ERROR MIDDLEWARE THAT USES CustomAPIError OR CREATES DEFAULT ONE
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

// errorHandlerMiddleware -> app.js
module.exports = errorHandlerMiddleware
