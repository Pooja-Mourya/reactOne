import asyncHandler from 'express-async-handler'
import meetings from '../models/meetingSchema.js'

export const createMeeting = asyncHandler(async (req, res) => {
  try {
    const doc = new meetings({
      title: req.body.title,
      agenda: req.body.agenda,
      link: req.body.link,
      date: req.body.date,
      time_start: req.body.time_start,
      time_end: req.body.time_end,
      attendees: req.body.attendees,
      invitation: req.body.invitation,
      photo: req.file.path,
    })

    await doc.save()
    if (req.file) {
      doc.photo = req.file.path
    }
    const created = await doc.save()
    if (created) {
      return res.status(201).send({
        success: true,
        message: 'post created successfully',
        post: created,
      })
    }
  } catch (error) {
    console.log('save post error', error)
    return res
      .status(409)
      .send({ success: false, message: 'something went wrong', error })
  }
})

// get all meeting
export const getMeeting = asyncHandler(async (req, res) => {
  try {
    const meeting = await meetings.find()
    res.status(200).json(meeting)
  } catch (error) {
    res.status(500).send({ success: false, message: 'meeting not found' })
  }
})

// Get a meeting by id
export const getMeetingById = asyncHandler(async (req, res) => {
  try {
    const meeting = await meetings.findById(req.params.id)
    res.status(200).json(meeting)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

// update meeting by id
export const editMeeting = asyncHandler(async (req, res) => {
  try {
    const updatedMeeting = await meetings.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          agenda: req.body.agenda,
          link: req.body.link,
          date: req.body.date,
          time_start: req.body.time_start,
          time_end: req.body.time_end,
          attendees: req.body.attendees,
          invitation: req.body.invitation,
          photo: req.body.photo,
        },
      },
    )
    // console.log(updatedMeeting)
    res.status(201).json(updatedMeeting)
  } catch (error) {
    console.log('error', error)
  }
})

// deleting data of user from the database
export const deleteMeeting = async (req, res) => {
  try {
    await meetings.deleteOne({ _id: req.params.id })
    res.status(201).json('User deleted Successfully')
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
