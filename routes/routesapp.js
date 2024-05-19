const {Router} = require ("express")
const { get_App } = require ("../controllers/controllersapp")

const router = Router()

router.get('/', get_App)

module.exports = router;

