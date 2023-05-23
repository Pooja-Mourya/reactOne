import express from 'express'
const router = express.Router()
import {
  addPost,
  deletePost,
  fetchPost,
  updatePosts,
  viewPostById,
} from '../controller/postController.js'
import upload from '../middleWare/upload.js'

router.post('/createPost', upload.single('image'), addPost)
router.get('/fetchPost', fetchPost)
router.get('/viewPost:id', viewPostById)
router.delete('/deletePost/:id', deletePost)
router.patch('/updatePost/:id', updatePosts)
export default router
