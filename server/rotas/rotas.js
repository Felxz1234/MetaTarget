const express= require('express')
const router = express.Router()
const controller = require('../constrolers/constroler')



router.get('/',controller.showall)
router.post('/',controller.submitMeta)



module.exports = router