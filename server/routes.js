const express = require('express')
const router = express.Router()

//  Headers

//  APIs
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: `Backend is alive`
  })
})

router.post('/sample', (req, res, next) => {
  const data = req.body.data

  if (!data) return next(new Error("API error, no data received"))

  res.status(200).json({
    message: `API response with data: [${data}]`
  })
})

//  Not found
router.use((req, res, next) => {
  const err = new Error('Route Not found')
  err.status = '404'
  next(err)
})

module.exports = router
