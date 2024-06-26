// Routes
const {Router} = require ("express")
const { loginUser, registerUser,  } = require ("../controllers/controllerUser")
const { createMaintenanceData, getMaintenanceData, updateRecord, deleteRecord } = require('../controllers/controllerRecords');
const authenticateToken = require('../middleware/authMiddleware');
const { sendEmail } = require('../controllers/controllerContact')

const router = Router()

router.put('/updateReminder/:id', authenticateToken, updateRecord);
router.delete('/deleteReminder/:id', deleteRecord);
router.post('/login', loginUser)
router.post('/send', sendEmail )
router.post('/register', registerUser)
router.post('/createReminder', authenticateToken, createMaintenanceData)
router.get('/dashboard', authenticateToken, getMaintenanceData)


  
module.exports = router
