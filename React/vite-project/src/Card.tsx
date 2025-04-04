import styles from "./styles/Card.module.css";

export function Card() {
  return (
    <div className={styles.card}>
      <img
        src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"
        alt=""
      />

      <div>
        <h2>Pôster: Star Wars (1977)</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ex
          fugit nisi obcaecati excepturi, harum ad doloremque fuga dolorem
          aspernatur cumque error a cupiditate, perferendis asperiores incidunt
          illum. Illum, veritatis?
        </p>
        <button>Comprar Agora</button>
      </div>
    </div>
  );
}
