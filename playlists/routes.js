const express = require("express")
const router = express.Router()
const controller = require("./playlistController")

router.get("/playlists",controller.getPlaylists)
router.get("/playlists/:id",controller.getPlaylistById)
router.post("/playlists/new",controller.newPlaylist)

router.put("/playlists/:id/name",controller.changeName)





module.exports = router