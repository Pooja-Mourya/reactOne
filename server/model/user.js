import mongoose from 'mongoose'
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: [true, 'user name is required'] },
    email: { type: String, required: [true, 'email is required'] },
    password: { type: String, required: [true, 'password is required'] },
    // blogs: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'post',
    //   require: [true, 'posts are required'],
    // },
  },
  { timestamps: true },
)

const UserModal = mongoose.model('user', userSchema)

export default UserModal
