let crypto = require("crypto");
let path = require("path");
let multer = require("multer");

// Upload avatar configuration
let maxFileSizeInKB = 500;
let maxFileSizeInBytes = maxFileSizeInKB * 1024; // 500 KB

let avatarUploadConfig = {
    fileSize: maxFileSizeInBytes, // Maximum file size in bytes
    fileFilter: function (req, file, callback) {
        let fileSize = parseInt(req.headers['content-length']);
        let allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];
        
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return callback(new Error("File: Only images are allowed"), false);
        } else if (fileSize > maxFileSizeInBytes) {
            return callback(new Error("File: Maximum photo size " + Math.round(maxFileSizeInBytes / 1024) + " KB"), false);
        } else {
            return callback(null, true);
        }
    },
};

let avatarStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let currentDir = __dirname.split("\\");
        let parentDir = path.join(currentDir.slice(0, currentDir.length - 1).join("/"));
        cb(null, path.join(parentDir, 'uploaded'));
    },
    filename: function (req, file, cb) {
        let hash = crypto.createHash('md5');
        let fileExtension = file.originalname.split(".").pop();
        // Generate a random hex string with 32 characters
        let randomHex = Array.from({length: 32}, () => Math.floor(Math.random() * 16).toString(16)).join('');
        let avatarFileName = hash.update("avatar_" + randomHex + "_" + 1).digest("hex") + "." + fileExtension;
        cb(null, avatarFileName);
    }
});

let uploadAvatar = multer({ 
    storage: avatarStorage, 
    fileFilter: avatarUploadConfig.fileFilter, 
    limits: { fileSize: avatarUploadConfig.fileSize } 
});
// Upload avatar

module.exports = {
    uploadAvatar: uploadAvatar
};
