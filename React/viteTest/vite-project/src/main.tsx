import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Container from "./Container";
import UnList from "./NextSteps";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Container
      title="Crie interfaces de usuário de componentes"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident at est nemo aperiam. Dolor accusamus laudantium pariatur. Ipsa quasi velit provident repellendus adipisci. Suscipit, vero? Perferendis porro deleniti nam obcaecati.
"
    />
    <Container
      title="Escreva componentes com código e marcação"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident at est nemo aperiam. Dolor accusamus laudantium pariatur. Ipsa quasi velit provident repellendus adipisci. Suscipit, vero? Perferendis porro deleniti nam obcaecati.
"
    />
    <UnList />
  </StrictMode>
);
