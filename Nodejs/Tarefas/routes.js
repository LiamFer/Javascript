const express = require("express")
const taskController = require("./controllers/taskController")
const router = express.Router()

router.get("/",taskController.index)
router.get("/lista/:id",taskController.getList)
router.post("/lista/create",taskController.newList)
router.post("/lista/delete/:id",taskController.deleteList)
router.post("/lista/:id/task/create",taskController.newTask)
router.post("/lista/:listId/task/:id/finish",taskController.finishTask)


module.exports = router