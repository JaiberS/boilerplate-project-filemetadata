const Router = require('express');
const filemetadataController = require('./controllers/FileMetadataController');
const multer = require('multer');

const router = new Router();

// health endpoint 
router.get("/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


const upload = multer({ dest: 'upload' });

router.post('/api/fileanalyse', upload.single('upfile'), filemetadataController.importFile);

module.exports = router;
