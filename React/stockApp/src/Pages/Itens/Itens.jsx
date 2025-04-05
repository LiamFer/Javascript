import { Link, Outlet } from "react-router-dom";
import styles from "./itens.module.css";

export default function Itens() {
  return (
    <div className={styles.box}>
      <h1>Stock Itens</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={"stock"} className={styles.linkbtn}>
          Todos os itens
        </Link>
        <Link to={"newitem"} className={styles.linkbtn}>Novo item</Link>
      </div>
      <hr />

      <Outlet/>
    </div>
  );
}
