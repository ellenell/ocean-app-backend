const router = require('express').Router();
const { blogCtrl } = require('../controllers') 

// ROUTES - METHODS //
router.get('/', blogCtrl.getBlog)
router.post('/', blogCtrl.createBlog)
router.put('/:id', blogCtrl.updateBlog)
router.post('/:id', blogCtrl.showBlog)
router.delete('/:id', blogCtrl.deleteBlog)


module.exports = router;
