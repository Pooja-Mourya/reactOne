module.exports = {
  Storage: multer
    .diskStorage({
      destination: function (req, file, cb) {
        cb(null, '/uploads')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
      },
    })
    .single(),
}