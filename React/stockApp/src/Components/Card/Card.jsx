import styles from "./card.module.css";

export default function Card({ text, value }) {
  return (
    <div className={styles.card}>
      <h4>{text}</h4>
      <h1>{value}</h1>
    </div>
  );
}
