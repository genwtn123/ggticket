const multer = require("multer");
const path = require("path");

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./static/uploads");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

module.exports = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
      let valid_ext = ['.jfif', '.jpg', '.png']
      if (!valid_ext.includes(path.extname(file.originalname))) {
          req.fileValidationError = 'File extention in invalid'
        return cb(null, false, req.fileValidationError);
      }
      cb(null, true);
  }
})
