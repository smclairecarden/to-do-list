import mongoose from "mongoose"

const Schema = mongoose.Schema

const toDoSchema = new Schema ({
  text: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
})

const ToDo = mongoose.model('ToDo', toDoSchema)

export {
  ToDo
}