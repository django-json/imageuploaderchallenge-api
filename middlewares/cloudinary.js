const {config, uploader} = require('cloudinary').v2;

//Require dotenv in development mode
if(process.env.NODE_ENV !== 'production') require("dotenv").config();

//Cloudinary configuration
const cloudinaryConfig = (req, res, next) => {
    config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });

    next();
};

module.exports = { cloudinaryConfig, uploader };