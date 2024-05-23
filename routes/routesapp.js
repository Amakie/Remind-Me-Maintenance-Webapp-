const {Router} = require ("express")
const { get_App, save_App, update_App, delete_App } = require ("../controllers/controllersapp")

const router = Router()

router.get('/', get_App)
router.post('/save', save_App)
router.post('/update', update_App)
router.post('/delete', delete_App)
router.post('/login', login_App)

module.exports = router
