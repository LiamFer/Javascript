import { useState, useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function EditItem() {
  const item = useLoaderData();
  const [nome, setNome] = useState(item.nome);
  const [quantidade, setQuantidade] = useState(+item.quantidade);
  const [preco, setPreco] = useState(+item.preco);
  const [categoria, setCategoria] = useState(item.categoria);
  const [descricao, setDescricao] = useState(item.descricao);
  const { data, updateItem } = useContext(DatabaseContext);
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateItem(item.id, {
      nome,
      quantidade,
      preco,
      categoria,
      descricao,
      updated: Date.now(),
    });
    navigate("/itens/stock");
  };

  return (
    <div>
      <h1>Atualizar item - {item.nome}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            name="quantidade"
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            name="preco"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="caixa">Caixa</option>
            <option value="pedra">Pedra</option>
            <option value="madeira">Madeira</option>
          </select>
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
}
