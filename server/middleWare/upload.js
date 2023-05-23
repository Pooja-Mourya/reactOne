import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`
    cb(null, uniqueSuffix)
  },
})
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
      cb(null, true)
    } else {
      console.log('you can upload only jpg and png ')
      cb(null, false)
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
})

export default upload
