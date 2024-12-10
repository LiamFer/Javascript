// Criando os meus próprios Tipos pra resolver o Problema
type state = "habitado" | "habitável" | "inabitável" | "inexplorado";
type coordinates = [number, number, number, number];
type Planet = {
  name: string;
  coordinates: coordinates;
  state: state;
  satellites: string[];
};

// Array de Planetas do meu SYSTEM
let planets: Planet[] = [];

// Função que gera um Planeta e adiciona ele no meu Array
function buildPlanet(name: string, coordinates: coordinates, state: state) {
  let planet: Planet = { name, coordinates, state, satellites: [] };
  planets.push(planet);
  alert(`O Planeta ${name} foi adicionado em seu Sistema Solar!`);
}
