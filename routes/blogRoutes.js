const router = require('express').Router();
const { blogCtrl } = require('../controllers');

// GET all blogs
router.get('/blog', blogCtrl.getBlog);

// CREATE a new blog
router.post('/blog/create', blogCtrl.createBlog);

// UPDATE a blog by ID
router.put('/:id', blogCtrl.updateBlog);

// GET a blog by ID
router.get('/:id', blogCtrl.showBlog);

// DELETE a blog by ID
router.delete('/:id', blogCtrl.deleteBlog);

module.exports = router;
