import express from 'express'
import {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
  forgotPassword,
  resetPassword,
} from '../controller/userController.js'
import protect from '../middleware/authMiddleware.js'
import uploadMiddleware from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.post('/register', uploadMiddleware.single('photo'), registerUser)
router.post('/login', loginUser)
router.get('/logout', logout)
router.get('/getuser', getUser)
router.get('/loggedin', loginStatus)
router.patch('/updateuser', protect, updateUser)
router.patch('/changepassword', protect, changePassword)
router.post('/forgotpassword', forgotPassword)
router.put('/resetpassword/:resetToken', resetPassword)

export default router

// webSocket
// rtc = react time communication
// what is half duplex and full duplex ?
// load balancing ?
// catching ?
// rtc half duplex , full duplex

//The password you entered is insecure. Your new password must contain at least 8 characters, cannot contain any part of your email address, and is different from your previous 4 passwords.

//mongoDp password
// Sun***123
