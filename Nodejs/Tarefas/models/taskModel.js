let lista = [
  { id: 1, title: "tarefa de teste", tasks: [] },
];

const listaModel = {
  getListas() {
    return lista;
  },

  getListaById(id) {
    return lista.find((list) => list.id == id);
  },

  createLista(title) {
    lista.unshift({ id: Date.now().toString(), title, tasks: [] });
  },

  deleteLista(id) {
    lista = lista.filter((list) => list.id != id);
  },

  addTask(id, title) {
    const index = lista.findIndex((list) => list.id == id);
    lista[index].tasks.unshift({
      id: Date.now().toString(),
      title,
      done: false,
    });
  },

  finishTask(listId, taskId) {
    const index = lista.findIndex((list) => list.id == listId);
    const taskIndex = lista[index].tasks.findIndex((task) => task.id == taskId);
    console.log(lista[index].tasks[taskIndex])
    lista[index].tasks[taskIndex].done = true;
  },
};

module.exports = listaModel;
