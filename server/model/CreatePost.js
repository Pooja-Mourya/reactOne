import mongoose from 'mongoose'

const CreatePostSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String }, //default: 'default.png'
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      require: [true, 'user required'],
    },
  },
  { timestamps: true },
)

const CreatePost = mongoose.model('post', CreatePostSchema)

export default CreatePost
