const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getData = asyncWrapper(async (req, res, next) => {
  const { url } = req.params
  const data = {} // fetch

  const result = !!data
  if (!result) return next(createCustomError(`No data with url: ${url}`, 404))

  res.status(200).json(data)
})

module.exports = {
  getData
}
