let playlists = [{ id: 1, title: "GAS", tags: [], songs: [] }];

module.exports = {
  getPlaylists: (req, res) => {
    res.json(playlists);
  },
  getPlaylistById: (req, res) => {
    const playlist = playlists.find((playlist) => playlist.id == req.params.id);
    if (playlist) {
      res.json(playlist);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  },

  newPlaylist: (req, res) => {
    console.log(req.body);
    const playlist = { id: Date.now().toString(), ...req.body };
    playlists.unshift(playlist);
    res.status(201).json({ message: "Playlist adicionada com sucesso!" });
  },

  changeName: (req, res) => {
    const id = req.params.id;
    const index = playlists.findIndex((p) => p.id == id);
    playlists[index].title = req.body.title;
    res.status(200).json({ message: "Nome Alterado com sucesso!" });
  },
  changeTags: (req, res) => {
    const id = req.params.id;
    const index = playlists.findIndex((p) => p.id == id);
    playlists[index].tags = req.body.tags;
    res.status(200).json({ message: "Tags Alteradas com sucesso!" });
  },
  deletePlaylist: (req, res) => {
    playlists = playlists.filter((a) => a.id != req.params.id);
    res.status(204).json({ message: "Deletado com sucesso!" });
  },
  addSong: (req, res) => {
    const id = req.params.playlistID;
    const index = playlists.findIndex((p) => p.id == id);
    playlists[index].songs.unshift({ id: Date.now().toString(), ...req.body });
    res.status(201).json({ message: "Música adicionada com sucesso!" });
  },
  deleteSong: (req, res) => {
    const id = req.params.playlistID;
    const songID = req.params.songID;
    const index = playlists.findIndex((p) => p.id == id);
    playlists[index].songs = playlists[index].songs.filter(p => p.id != songID)
    res.status(204).json({ message: "Deletado com sucesso!" });
  },
};
