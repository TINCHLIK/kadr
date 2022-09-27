const Router = require('express')
const router = new Router()
const kadrlar = require('./kadrlar')

router.use('/kadrlar', kadrlar)

module.exports = router