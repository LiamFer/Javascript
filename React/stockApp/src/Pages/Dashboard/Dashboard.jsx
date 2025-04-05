import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import styles from "./dashboard.module.css";
import { useContext } from "react";
import { DatabaseContext } from "./../../context/DatabaseContext";

export default function Dashboard() {
  const { data } = useContext(DatabaseContext);
  return (
    <div className={styles.box}>
      <h1>Dashboard</h1>
      <div className={styles.cardsbox}>
        <Card
          text={"Diversidade de itens"}
          value={new Set(data.map((item) => item.nome)).size}
        ></Card>
        <Card
          text={"Inventário total"}
          value={data.reduce((total, item) => {
            return total + +item.quantidade;
          }, 0)}
        ></Card>
        <Card text={"Itens recentes"} value={data.length}></Card>
        <Card
          text={"Itens acabando"}
          value={data.filter((item) => item.quantidade <= 10).length}
        ></Card>
      </div>

      <section className={styles.itembox}>
        <article>
          <div
            className={styles.head}
            style={{ backgroundColor: "rgb(28, 26, 29)" }}
          >
            <h4>Itens Recentes</h4>
            <h4>Ações</h4>
          </div>

          {data.map((item) => (
            <div className={styles.head}>
              <h4>{item.nome}</h4>
              <Link to={`/itens/view/${item.id}`} className={styles.seebtn}>
                Ver
              </Link>
            </div>
          ))}
        </article>

        <article>
          <div
            className={styles.head}
            style={{ backgroundColor: "rgb(28, 26, 29)" }}
          >
            <h4>Itens Acabando</h4>
            <h4>Qtd</h4>
            <h4>Ações</h4>
          </div>

          {data
            .filter((item) => item.quantidade <= 10)
            .map((item) => (
              <div className={styles.head}>
                <h4>{item.nome}</h4>
                <h4>{item.quantidade}</h4>
                <Link to={`/itens/view/${item.id}`} className={styles.seebtn}>
                  Ver
                </Link>
              </div>
            ))}
        </article>
      </section>
    </div>
  );
}
