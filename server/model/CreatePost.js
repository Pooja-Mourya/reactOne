import mongoose from 'mongoose'

const CreatePostSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String }, //default: 'default.png'
  },
  { timestamps: true },
)

const CreatePost = mongoose.model('post', CreatePostSchema)

export default CreatePost
