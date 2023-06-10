// const express = require('express');
// const multer = require('multer');

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// router.post('/upload', upload.single('file'), (req, res) => {
//   // Handle the file upload
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   // Access the uploaded file details
//   const { originalname, filename, size } = req.file;

//   // Process the file data as needed

//   res.status(200).json({ message: 'File uploaded successfully', file: { originalname, filename, size } });
// });

// module.exports = router;
