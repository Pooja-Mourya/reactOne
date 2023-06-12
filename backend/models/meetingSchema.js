import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const meetingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a name'],
    },
    agenda: {
      type: String,
      required: [true, 'Please add a email'],
    },
    link: {
      type: String,
      required: [true, 'Please add a password'],
    },
    date: {
      type: String,
      required: [true, 'Please add a photo'],
    },
    time_start: {
      type: String,
      default: '+234',
      required: [true, 'this field is required'],
    },
    time_end: {
      type: String,
      required: [true, 'this field is required'],
    },
    attendees: {
      type: String,
      required: [true, 'this field is required'],
    },
    invitation: {
      type: String,
      required: [true, 'this field is required'],
    },
    photo: {
      type: String,
      required: [true, 'this field is required'],
    },
  },
  {
    timestamps: true,
  },
)

const Meeting = mongoose.model('Meeting', meetingSchema)
export default Meeting
