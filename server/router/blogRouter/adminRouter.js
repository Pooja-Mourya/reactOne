import express from 'express'

const router = express.Router()
import {
  blogSetting,
  bloggerLogin,
} from '../../controller/blogController/adminController.js'

router.get('/blog-setup', blogSetting)
router.get('/blog-login', bloggerLogin)

export default router
