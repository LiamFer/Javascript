// Array de Planetas do meu SYSTEM
var planets = [];
// Função que gera um Planeta e adiciona ele no meu Array
function buildPlanet(name, coordinates, state) {
    var planet = { name: name, coordinates: coordinates, state: state, satellites: [] };
    planets.push(planet);
    alert("O Planeta ".concat(name, " foi adicionado em seu Sistema Solar!"));
}
