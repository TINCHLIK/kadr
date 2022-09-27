const Router = require('express')
const router = new Router()
const kadrlarController = require('../controllers/kadrlar')

router.post('/create', kadrlarController.create)
router.get('/all', kadrlarController.getAll)
router.get('/:id', kadrlarController.getById)
router.put('/:id', kadrlarController.update)
router.delete('/all', kadrlarController.deleteAll)
router.delete('/:id', kadrlarController.deleteById)

module.exports = router