const {Router} = require ("express")
const { get_Apps, save_App, update_App, 
    delete_App, register } = require ("../controllers/controllersapp")

const router = Router()

router.get('/get', get_Apps)
router.post('/save', save_App)
router.post('/update', update_App)
router.post('/delete', delete_App)
router.post('/register', register)

module.exports = router
