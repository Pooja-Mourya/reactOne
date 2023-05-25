import mongoose from 'mongoose'

const blogSetting = new mongoose.Schema({
  blog_title: { type: String, require: true },
  blog_logo: { type: String, require: true },
  description: { type: String, require: true },
})

const blogSet = mongoose.model('blogSetting', blogSetting)

export default blogSet
