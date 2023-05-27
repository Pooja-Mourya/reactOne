import express from 'express'
const router = express.Router()
import {
  addPost,
  deletePost,
  fetchPost,
  getUserBlog,
  updatePosts,
  viewPostById,
} from '../controller/postController.js'
import upload from '../middleWare/upload.js'

router.post('/createPost', upload.single('image'), addPost)
router.get('/fetchPost', fetchPost)

router.get('/viewPost/:id', viewPostById)
router.delete('/deletePost/:id', deletePost)
router.put('/updatePost/:id', updatePosts)
router.get('/userBlog/:id', getUserBlog)
export default router
