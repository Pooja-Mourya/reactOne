const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const jwtKey = 'shansprar'

const router = express.Router()
const User = mongoose.model('User')

router.post('/signup', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body

  try {
    const user = new User({ email, password })
    // const userExist = new User({ email: email })
    // if (userExist)
    //   return res.status(422).json({ error: 'email is already exist' })

    await user.save()
    const token = jwt.sign({ userId: user._id }, jwtKey)
    res.send(token)
  } catch (error) {
    // console.log('error', error.message)
    return res.status(422).send(error.message)
  }
})

router.post('/signIn', async (req, res) => {
  //   console.log(req.body)
  //   res.send('ok')
  const { email, password } = req.body

  if (!email || !password) {
    res.status(422).send('please provide correct password and email')
  }

  const user = await User.findOne({ email: email })

  //   console.log('userLogin', user)
  if (!user) {
    try {
      res.status(422).send('please provide correct password and email')
      await user.comparePassword(password)
      const token = jwt.sign({ userId: user._id }, 'shansprar')
      console.log(res.send(token))
      res.send(token)
    } catch (error) {
      res.status(422).send('please provide correct password and email')
    }
    // res.status(400).json({ error: 'login error' })
  } else {
    res.json({ message: 'user login successfully' })
  }
})

module.exports = router
