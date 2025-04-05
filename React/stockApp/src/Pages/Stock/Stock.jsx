import { useContext } from "react";
import styles from "./stock.module.css";
import { Link } from "react-router-dom";
import { DatabaseContext } from "../../context/DatabaseContext";

export default function Stock() {
  const { data, removeItem } = useContext(DatabaseContext);

  return (
    <article className={styles.box}>
      <div className={styles.table}>
        <div
          className={styles.head}
          style={{ backgroundColor: "rgb(28, 26, 29)" }}
        >
          <h4>ID</h4>
          <h4>Nome</h4>
          <h4>Em Estoque</h4>
          <h4>Categoria</h4>
          <h4>Ações</h4>
        </div>

        {data.map((item) => (
          <div className={styles.head}>
            <h4>{item.id}</h4>
            <h4>{item.nome}</h4>
            <h4>{item.quantidade}</h4>
            <h4>{item.categoria}</h4>
            <div>
              <Link to={`/itens/view/${item.id}`} className={styles.seebtn}>Ver</Link>
              <Link to={`/itens/edit/${item.id}`} className={styles.seebtn}>Atualizar</Link>
              <Link onClick={()=> removeItem(item.id)} className={styles.seebtn}>Excluir</Link>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
