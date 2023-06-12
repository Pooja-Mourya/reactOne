import express from 'express'
import {
  createMeeting,
  deleteMeeting,
  editMeeting,
  getMeeting,
  getMeetingById,
} from '../controller/meetingController.js'
import uploadMiddleware from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.post('/createMeeting', uploadMiddleware.single('photo'), createMeeting)
router.get('/getMeeting', getMeeting)
router.get('/getMeetingById/:id', getMeetingById)
router.delete('/deleteMeeting/:id', deleteMeeting)
router.put('/editMeeting/:id', editMeeting)

export default router
