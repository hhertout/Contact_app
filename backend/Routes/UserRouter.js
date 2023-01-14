const express = require('express')
const router = express.Router()
const userController = require('../Controllers/ContactController')

router.post('/signup', userController.signup)
router.post('/login', userController.login)


module.exports = router;