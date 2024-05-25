const { Router } = require('express');
const { get_Records, save_Record, update_Record, delete_Record } = require('../controllers/controllerRecords');

const router = Router();

router.get('/', get_Records);
router.post('/', save_Record);
router.put('/:id', update_Record);
router.delete('/:id', delete_Record);

module.exports = router;
