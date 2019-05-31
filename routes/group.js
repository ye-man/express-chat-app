const router = require("express").Router()
const groupController = require("../controllers/groupController")


//get group page
router.get('/group/:name', groupController.getGroup)







//exports
module.exports = router;