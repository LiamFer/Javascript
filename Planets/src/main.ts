// Criando os meus próprios Tipos pra resolver o Problema
type state = "habitado" | "habitável" | "inabitável" | "inexplorado";
type Planet = {
  name: string;
  coordinates: [number, number, number, number];
  state: state;
  satellites: string[];
};
