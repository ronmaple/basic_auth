import mongoose, { Schema } from 'mongoose'

enum Roles {
  Admin = 'Admin',
  Basic = 'Basic'
}

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 12,
    required: true,
  },
  role: {
    type: String,
    default: Roles.Basic,
    enum: Roles,
    required: true,
  },
})

const user = mongoose.model('user', userSchema)

export default user