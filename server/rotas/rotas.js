const express= require('express')
const router = express.Router()
const controller = require('../constrolers/constroler')



router.get('/',controller.showall)
router.post('/submit',controller.submitMeta)
router.delete('/deleteTask/:id',controller.deleteTask)
router.post('/editar/:id',controller.editar)
router.post('/editSituasion/:id',controller.editState)

module.exports = router