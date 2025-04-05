import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <h3>Made with React</h3>
      </footer>
    </>
  );
}
