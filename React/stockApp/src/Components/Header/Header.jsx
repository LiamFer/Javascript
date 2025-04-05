import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>REACT STOCK</h1>
      <div>
        <Link to={"/dashboard"} className={styles.link}>
          Início
        </Link>
        <Link to={"/itens/stock"} className={styles.link}>
          Itens
        </Link>
      </div>
    </header>
  );
}
