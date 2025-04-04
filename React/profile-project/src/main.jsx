import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import "./styles/globals.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileCard
      avatar="https://avatars.githubusercontent.com/u/110684329?v=4"
      name="Matheus Gonçalves"
      bio="💻 Desenvolvedor Full Stack | DevOps | Node.js | PostgreSQL | AWS"
      email="math.goncalvez@outlook.com"
      phone="(19) 922469875"
      githubUrl="https://github.com/MatheusGoncalves540"
      linkedinUrl="https://github.com/MatheusGoncalves540"
      twitterUrl="https://github.com/MatheusGoncalves540"
    />
  </StrictMode>
);
