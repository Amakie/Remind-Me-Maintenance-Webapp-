const {Router} = require ("express")
const { get_App, save_App } = require ("../controllers/controllersapp")

const router = Router()

router.get('/', get_App)
router.post('/save', save_App)

module.exports = router
