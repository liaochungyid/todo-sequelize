const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { hello: 'Hello world!' })
})

module.exports = router
