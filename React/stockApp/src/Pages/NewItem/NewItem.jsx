import { useState, useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";

export default function NewItem() {
  const [ nome, setNome ] = useState("");
  const [ quantidade, setQuantidade ] = useState(0);
  const [ preco, setPreco ] = useState(0);
  const [ categoria, setCategoria ] = useState("Caixa");
  const [ descricao, setDescricao ] = useState("");
  const { data, addItem } = useContext(DatabaseContext);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addItem({id:Date.now().toString(),nome,quantidade,preco,categoria,descricao,date:Date.now(),updated:Date.now()})
    console.log("hugo")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            name="quantidade"
            id="quantidade"
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            name="preco"
            id="preco"
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
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
}
