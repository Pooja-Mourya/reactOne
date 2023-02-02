const mongoose = require('mongoose')

const AvatarSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  //   date: {
  //     type: Date,
  //   },
})

const Avatar = mongoose.model('Avatar', AvatarSchema)

module.exports = Avatar
