const {Router} = require ("express")

const router = Router()

router.get('/', (req, res) => {
    res.json({message: "welcome to our app"})
})

module.exports = router;

