import { useState } from "react";
import styles from "./box.module.css";
import "./App.css";
import Form from "./Components/Form/Form";
import Comment from "./Components/Comment/Comment";

function App() {
  const [comments, setComments] = useState([]);

  return (
    <>
      <div className={styles.box}>
        <Form addComment={setComments} />
        <hr />
        {comments.length ? (
          comments.map((c) => (
            <Comment
              key={c.date}
              email={c.email}
              date={c.date}
              comment={c.comment}
            />
          ))
        ) : (
          <h3>Nenhum Comentário</h3>
        )}
      </div>
    </>
  );
}

export default App;
