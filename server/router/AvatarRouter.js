const express = require('express')
const Avatar = require('../models/AvatarSchema')
const multer = require('multer')
const moment = require('moment')

const router = express.Router()

// img storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads')
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}. ${file.originalname}`)
  },
})

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true)
  } else {
    callback(new Error('only images is allowd'))
  }
}

const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
})

router.post('/upload', upload.single('image'), async (req, res) => {
  const { filename } = req.file
  //   console.log('image', req.file)
  const { user, email } = req.body
  //   console.log('user', req.body)

  if (!user || !email || !filename) {
    res.status(401).json({ status: 401, message: 'fill all the data' })
  }

  try {
    const date = moment(new Date()).format('YYYY-MM-DD')

    const userData = new Avatar({
      user: user,
      email: email,
      image: filename,
      date: date,
    })

    const finalData = await userData.save()

    // console.log('finalData', userData)

    res.status(201).json({ status: 201, finalData })
  } catch (error) {
    res.status(401).json({ status: 401, error: error.message })
  }
})

router.get('/getData', async (req, res) => {
  try {
    const getUser = await Avatar.find()

    res.status(201).json({ status: 201, getUser })
  } catch (error) {
    res.status(401).json({ status: 401, error })
  }
})

// delete user data
router.delete('/getData:id', async (req, res) => {
  try {
    const { id } = req.params

    const dltUser = await Avatar.findByIdAndDelete({ _id: id })

    res.status(201).json({ status: 201, dltUser })
  } catch (error) {
    res.status(401).json({ status: 401, error })
  }
})

module.exports = router
