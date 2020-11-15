var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/crear', productsController.crear);
router.post('/crear', productsController.store);

router.get('/edit/:id', productsController.edit);
router.post('/edit/:id',productsController.update);

router.get('/delete/:id', productsController.delete);



module.exports = router;
