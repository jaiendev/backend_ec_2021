const createUser = require('../controllers/user')
const express = require('express')
const router = express.Router()
const UserService=require('../controllers/user')
router.post('/register', UserService.createUser)
router.post('/login', UserService.login)
router.put('/Change-password', UserService.changePassword)
router.delete('/delete-password',UserService.deleteUser)
module.exports = router
