import styles from "./form.module.css";
import { useState } from "react";

export default function Form({addComment}) {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComment(prev => [...prev,{email,comment,date:Date.now().toLocaleString()}])
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Seção de Comentários</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <label htmlFor="comentario">Comentário</label>
      <textarea
        rows={7}
        name="comentario"
        id="comentario"
        onChange={(ev) => setComment(ev.target.value)}
      >
        {comment}
      </textarea>

      <input type="submit" value="Enviar comentário" />
    </form>
  );
}
