import { createContext, useEffect, useState } from "react";

export const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("myData");
    return localData ? JSON.parse(localData) : [];
  });

  // Sincroniza sempre que 'data' mudar
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  const addItem = (item) => setData((prev) => [...prev, item]);

  const removeItem = (id) =>
    setData((prev) => prev.filter((item) => item.id !== id));

  const updateItem = (id, updatedItem) =>
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );

  return (
    <DatabaseContext.Provider value={{ data, addItem, removeItem, updateItem }}>
      {children}
    </DatabaseContext.Provider>
  );
};
