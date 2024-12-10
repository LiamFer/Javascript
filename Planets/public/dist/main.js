// Array de Planetas do meu SYSTEM
let planets = [];
// Função pra Pickar um Planeta pelo nome
function getPlanet() {
    let name = prompt("Qual o nome do Planeta que você deseja executar essa Operação?");
    return planets.find((planet) => planet.name == name);
}
// Função que gera um Planeta e adiciona ele no meu Array
function buildPlanet() {
    let name = prompt("Qual o Nome do Planeta");
    let coordinates = JSON.parse(prompt("Quais as Coordenadas do Planeta? EX: [w,x,y,z]"));
    let state = prompt("Qual a situação desse Planeta? (habitado, habitável, inabitável, inexplorado)");
    let planet = { name, coordinates, state, satellites: [] };
    planets.push(planet);
    alert(`O Planeta ${name} foi adicionado em seu Sistema Solar!`);
}
// Função pra atualizar o State de determinado Planeta
function updatePlanetState(planet) {
    let state = prompt("Qual a situação deseja colocar nesse Planeta? (habitado, habitável, inabitável, inexplorado)");
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
// LOOP INIFINITO pra rodar o Programa
while (true) {
    const menu = "Escolha uma das Opções:\n\n1- Criar Planeta\n2- Atualizar Situação\n3- Adicionar Satélite\n4- Remover Satélite\n5- Listar Planetas";
    let option = prompt(menu);
    switch (option) {
        case "1":
            buildPlanet();
            break;
        case "2":
            updatePlanetState(getPlanet());
            break;
        case "3":
    }
}
