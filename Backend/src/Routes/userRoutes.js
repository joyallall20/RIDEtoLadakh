import express from 'express'
import {SignUp, Login }from '../Controllers/UserController.js'


const router = express.Router()

router.post('/signup' , SignUp)
router.post('/login',  Login)

export default router