import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  //   tc: { type: Boolean, required: true },
})

const UserModal = mongoose.model('user', userSchema)

export default UserModal
