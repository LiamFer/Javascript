import { Link, useLoaderData, useNavigate } from "react-router-dom";
import styles from "./item.module.css";
import { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";

export default function Item() {
  const item = useLoaderData();
  const navigate = useNavigate();
  const { removeItem } = useContext(DatabaseContext);
  const delItem = (id) => {
    removeItem(id);
    navigate("/dashboard");
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <h3>{item.nome}</h3>
        <Link to={`/itens/edit/${item.id}`}>Atualizar</Link>
        <button onClick={() => delItem(item.id)}>Excluir</button>
      </div>

      <div>
        <div>Categoria: {item.categoria}</div>
        <div>Quantidade em estoque: {item.quantidade}</div>
        <div>Preço: R$ {item.preco}</div>
      </div>

      <p>{item.descricao}</p>
      <div>
        <p>Cadastro em: {new Date(item.date).toLocaleString("pt-BR")}</p>
        <p>Atualizado em: {new Date(item.updated).toLocaleString("pt-BR")}</p>
      </div>
    </div>
  );
}
