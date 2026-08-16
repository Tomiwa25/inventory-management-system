const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../Config/Cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "bokkusupermarket",
        allowFormat: ['jpg', 'jpeg', 'png'],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
    },
});

