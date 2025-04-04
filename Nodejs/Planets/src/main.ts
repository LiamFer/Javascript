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

// Função pra Pickar um Planeta pelo nome
function getPlanet() {
  let name = prompt(
    "Qual o nome do Planeta que você deseja executar essa Operação?"
  );
  return planets.find((planet) => planet.name == name);
}

// Função que gera um Planeta e adiciona ele no meu Array
function buildPlanet() {
  let name = prompt("Qual o Nome do Planeta");
  let coordinates: coordinates = JSON.parse(
    prompt("Quais as Coordenadas do Planeta? EX: [w,x,y,z]")
  );
  let state: any = prompt(
    "Qual a situação desse Planeta? (habitado, habitável, inabitável, inexplorado)"
  );
  let planet: Planet = { name, coordinates, state, satellites: [] };
  planets.push(planet);
  alert(`O Planeta ${name} foi adicionado em seu Sistema Solar!`);
}

// Função pra atualizar o State de determinado Planeta
function updatePlanetState(planet: Planet) {
  let state: any = prompt(
    "Qual a situação deseja colocar nesse Planeta? (habitado, habitável, inabitável, inexplorado)"
  );
  planet.state = state;
  alert(
    `O estado do Planeta ${
      planet.name
    } foi alterado para ${state.toUpperCase()}`
  );
}

// Adicionando um Satélite a um Planeta
function addSatellite(planet: Planet) {
  let name = prompt(
    `Qual o Nome do Satélite que deseja incluir na Órbita de ${planet.name}?`
  );
  planet.satellites.push(name);
  alert(
    `O satélite ${name} foi adicionado na Órbita do Planeta ${planet.name}`
  );
}

// Função que remove Satélite do Planeta
function popSatellite(planet: Planet) {
  let name = prompt(
    `Qual o Nome do Satélite que deseja remover da Órbita de ${planet.name}?`
  );
  planet.satellites.splice(planet.satellites.indexOf(name), 1);
  alert(
    `O Satélite ${name.toUpperCase()} foi removido da Órbita de ${planet.name}!`
  );
}

// Função que Lista todos os planetas e suas Informações
function listPlanets() {
  const planetsList: string = planets.reduce(
    (s, planet) =>
      s +
      `Planeta: ${planet.name}\n
       Coordenadas: ${JSON.stringify(planet.coordinates)}\n
       Situação: ${planet.state}\n
        Satélites: ${JSON.stringify(planet.satellites)}\n\n`,
    ""
  );
  alert(planetsList);
}

// LOOP INIFINITO pra rodar o Programa
while (true) {
  const menu: string =
    "Escolha uma das Opções:\n\n1- Criar Planeta\n2- Atualizar Situação\n3- Adicionar Satélite\n4- Remover Satélite\n5- Listar Planetas";
  let option = prompt(menu);

  switch (option) {
    case "1":
      buildPlanet();
      break;
    case "2":
      updatePlanetState(getPlanet());
      break;
    case "3":
      addSatellite(getPlanet());
      break;
    case "4":
      popSatellite(getPlanet());
      break;
    case "5":
      listPlanets();
      break;
    default:
      alert("Escolha uma Opção Válida!");
  }
}
