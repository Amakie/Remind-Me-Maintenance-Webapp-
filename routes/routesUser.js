const {Router} = require ("express")
const { loginUser, registerUser, createMaintenanceData, getMaintenanceData } = require ("../controllers/controllerUser")
const authenticateToken = require('../middleware/authMiddleware');

const router = Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/createReminder', authenticateToken, createMaintenanceData)
router.get('/dashboard', authenticateToken, getMaintenanceData)

module.exports = router
