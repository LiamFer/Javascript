const express = require("express")
const router = express.Router()
const controller = require("./playlistController")

router.get("/playlists",controller.getPlaylists)
router.get("/playlists/:id",controller.getPlaylistById)
router.post("/playlists/new",controller.newPlaylist)

router.put("/playlists/:id/name",controller.changeName)
router.put("/playlists/:id/tags",controller.changeTags)
router.delete("/playlists/:id",controller.deletePlaylist)

router.post("/playlists/:playlistID/song/new",controller.addSong)
router.delete("/playlists/:playlistID/song/:songID/delete",controller.deleteSong)

module.exports = router