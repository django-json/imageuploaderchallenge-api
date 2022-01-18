const express = require('express');
const cors = require('cors');

const {multerUploads, dataUri} = require('./middlewares/multer');
const { cloudinaryConfig, uploader } = require('./middlewares/cloudinary'); 

const upload = require('./controllers/upload');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cloudinaryConfig);

//Routes
app.get('/', (req, res) => {
    res.send('root');
});

app.post(
    '/upload-image', 
    multerUploads, 
    upload.uploadImage(uploader, dataUri)
);

// Listen to port 3001
app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});