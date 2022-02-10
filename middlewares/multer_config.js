const multer = require("multer");

const tableauMIME_TYPE = {  
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'

};

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/images_produits')
    },
    filename: function(req, file, cb) {
        const extension = tableauMIME_TYPE[file.mimetype];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension)
    }
})

module.exports = multer({ storage: storage }).single('product_image');