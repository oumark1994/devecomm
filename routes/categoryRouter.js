const router = require('express').Router()
const categoryCtrl = require("../controllers/categoryCtrl")
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
router.post('/category',auth,authAdmin,categoryCtrl.createCategory)
router.get('/category',categoryCtrl.getCategories)
router.delete('/category/:id',auth,authAdmin,categoryCtrl.deleteCategory)
router.put('/category/:id',auth,authAdmin,categoryCtrl.updateCategory)



module.exports = router