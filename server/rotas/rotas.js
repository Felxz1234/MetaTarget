const express= require('express')
const router = express.Router()
const controller = require('../constrolers/constroler')



router.get('/',controller.showall)
router.post('/submit',controller.submitMeta)
router.delete('/deleteTask/:id',controller.deleteTask)


module.exports = router