import mongoose, { Schema } from 'mongoose'

const noteSchema = new Schema({
  author: String,
  body: String,
  date: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const note = mongoose.model('note', noteSchema)

export default note