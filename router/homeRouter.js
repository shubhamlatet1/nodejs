import express from 'express';
const router = express.Router();
import homeController from '../controls/homeController.js';
import detailController from '../controls/detailController.js';
import signinController from '../controls/signinController.js';
import singleProductController from '../controls/singleProductController.js';

router.get('/', homeController);
router.get('/detail', detailController);
router.get('/signIn', signinController);
router.get('/singleproduct/:id', singleProductController);

export default router;
