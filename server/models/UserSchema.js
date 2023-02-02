const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

UserSchema.pre('save', function (next) {
  //   const user = this
  //   console.log('user', user)
  //   if (user.isModified('password')) {
  //     return next()
  //   }

  //   bcrypt.genSalt(10, (err, salt) => {
  //     if (err) {
  //       return next(err)
  //     }
  //     bcrypt.hash(user.password, salt, (err, hash) => {
  //       if (err) {
  //         return next(err)
  //       }
  //       user.password = hash
  //       next()
  //     })
  //   })

  if (this.isModified('password')) {
    console.log('my hashed password')
    this.password = bcrypt.hash(this.password, 10)
    // if confirm password ho to
    // this.password = bcrypt.hash(this.password, 10)
  }
  next()
})

UserSchema.methods.comparePassword = function (candidatePassword) {
  const user = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err)
      }
      if (!isMatch) {
        return reject(err)
      }
      resolve(true)
    })
  })
}

mongoose.model('User', UserSchema)
