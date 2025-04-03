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
};
