const router = require('express').Router();
const { blogCtrl } = require('../controllers');

// GET all blogs
router.get('/blog', blogCtrl.getBlog);

// UPDATE a blog by ID
router.put('/blog/edit/:id', blogCtrl.updateBlog);

// GET a blog by ID for editing
router.get('/blog/edit/:id', blogCtrl.getBlogForEdit);

// added a get for my edit route 

// CREATE a new blog
router.post('/blog/create', blogCtrl.createBlog);

// GET a blog by ID
router.get('/:id', blogCtrl.showBlog);

// DELETE a blog by ID
router.delete('/blog/:id', blogCtrl.deleteBlog);


module.exports = router;
