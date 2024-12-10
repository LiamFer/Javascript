// Array de Planetas do meu SYSTEM
let planets = [];
// Função pra Pickar um Planeta pelo nome
function getPlanet(name) {
    return planets.find((planet) => planet.name == name);
}
// Função que gera um Planeta e adiciona ele no meu Array
function buildPlanet(name, coordinates, state) {
    let planet = { name, coordinates, state, satellites: [] };
    planets.push(planet);
    alert(`O Planeta ${name} foi adicionado em seu Sistema Solar!`);
}
// Função pra atualizar o State de determinado Planeta
function updatePlanetState(planet, state) {
    planet.state = state;
    alert(`O estado do Planeta ${planet.name} foi alterado para ${state.toUpperCase()}`);
}
// Adicionando um Satélite a um Planeta
function addSatellite(planet, name) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado na Órbita do Planeta ${planet.name}`);
}
// Função que remove Satélite do Planeta
function popSatellite(planet, name) {
    planet.satellites.splice(planet.satellites.indexOf(name), 1);
    alert(`O Satélite ${name.toUpperCase()} foi removido da Órbita de ${planet.name}!`);
}
// Função que Lista todos os planetas e suas Informações
function listPlanets() {
    const planetsList = planets.reduce((s, planet) => s +
        `Planeta: ${planet.name}\n
       Coordenadas: ${JSON.stringify(planet.coordinates)}\n
       Situação: ${planet.state}\n
        Satélites: ${JSON.stringify(planet.satellites)}\n\n`, "");
    alert(planetsList);
}
