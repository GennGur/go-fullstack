const express = require('express');
const auth = require('auth');
const router = express.Router();


const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllThing);
router.post('/', auth, stuffCtrl.createThing );
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.modifyThing );
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;