const router = require('express').Router()
const messageCtrl = require('../controllers/messageCtrl')

router.get('/message',messageCtrl.getMessages)
router.post('/message',messageCtrl.createMessage)
module.exports = router