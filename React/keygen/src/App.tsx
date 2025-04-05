import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopytext] = useState("Copiar");

  function generatePassword(): void {
    let newPassword = "";
    const characters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "+",
      "=",
      "{",
      "}",
      "[",
      "]",
      "|",
      ":",
      ";",
      "<",
      ">",
      "?",
      "/",
      "~",
    ];

    for (let i = 0; i < Math.random() * (16 - 8) + 8; i++) {
      console.log(Math.random() * (characters.length - 0) + 0)
      newPassword += characters[Math.floor(Math.random() * (characters.length - 0) + 0)]
    }

    setPassword(newPassword);
    setCopytext("Copiar");
  }

  return (
    <>
      <div></div>
      <h1>Gerador de Senha</h1>
      <div className="card">
        <button onClick={generatePassword}>Gerar senha</button>

        <button
          onClick={() => {
            navigator.clipboard.writeText(password);
            setCopytext("Copiado!");
          }}
        >
          {copyText}
        </button>

        <p>{password}</p>
      </div>
    </>
  );
}

export default App;
