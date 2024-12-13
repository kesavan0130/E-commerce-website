const express =require('express');
const { getproduct, getSingleproduct } = require('../controllers/ProductController');
const router = express.Router();
router.route('/product').get(getproduct);  
 //.post(createproduct).put(updateproduct).delete(deleteproduct);
 router.route('/product').get(getSingleproduct);

 module.exports = router;