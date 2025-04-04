const listaModel = require("../models/taskModel");

const taskController = {
  index: (req, res) => {
    const tarefas = listaModel.getListas();
    res.render("index", { tarefas });
  },
  newList: (req, res) => {
    listaModel.createLista(req.body.title);
    res.redirect("/");
  },

  newTask: (req, res) => {
    const listId = req.params.id;
    const title = req.body.title;
    listaModel.addTask(listId, title);
    const lista = listaModel.getListaById(listId);
    res.render("lista", { lista });
  },

  finishTask: (req, res) => {
    const listId = req.params.listId
    listaModel.finishTask(listId, req.params.id);
    const lista = listaModel.getListaById(listId);
    res.render("lista", { lista });
  },

  getList: (req, res) => {
    const lista = listaModel.getListaById(req.params.id);
    res.render("lista", { lista });
  },

  deleteList: (req, res) => {
    listaModel.deleteLista(req.params.id);
    res.redirect("/");
  },
};

module.exports = taskController;
