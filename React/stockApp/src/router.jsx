import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Itens from "./Pages/Itens/Itens";
import Stock from "./Pages/Stock/Stock";
import Item from "./Pages/Item/Item";
import NewItem from "./Pages/NewItem/NewItem";
import loadItem from "./loaders/viewItem";
import EditItem from "./Pages/EditItem/EditItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "itens",
        element: <Itens />,
        children: [
          { path: "stock", element: <Stock /> },
          { path: "newitem", element: <NewItem /> },
          { path: "view/:itemid", element: <Item />, loader: loadItem },
          { path: "edit/:itemid", element: <EditItem />, loader: loadItem },
        ],
      },
    ],
  },
]);

export default router;
