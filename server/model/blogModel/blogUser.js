import mongoose from 'mongoose'

const blogUser = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  is_admin: { type: String, require: true },
  token: { type: String, require: true, default: '' },
})

const userBlog = mongoose.model('blogUser', blogUser)

export default userBlog
