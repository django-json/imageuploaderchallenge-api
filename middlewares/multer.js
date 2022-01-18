const multer = require('multer');
const DatauriParser = require('datauri/parser');
const path = require('path');

const storage = multer.memoryStorage();
const multerUploads = multer({ 
    storage, 
    fileFilter: (req, file, cb) => {
        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
}).single('file');

const parser = new DatauriParser();
const dataUri = req => parser.format(path.extname(req.file.originalname).toString(), req.file.buffer);

module.exports = { multerUploads, dataUri };