const {Router} = require ("express")
const { loginUser, registerUser, createMaintenanceData, getMaintenanceData } = require ("../controllers/controllerUser")
const { updateRecord, deleteRecord } = require('../controllers/controllerRecords');

const authenticateToken = require('../middleware/authMiddleware');

const router = Router()

router.put('/updateReminder/:id', authenticateToken, updateRecord);
router.delete('/deleteReminder/:id', deleteRecord);
router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/createReminder', authenticateToken, createMaintenanceData)
router.get('/dashboard', authenticateToken, getMaintenanceData)

  
module.exports = router
