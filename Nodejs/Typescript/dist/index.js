function sendShip(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 10,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceship.name, " comandada por ").concat(spaceship.captain, " foi enviada para uma miss\u00E3o!"));
    return spaceship;
}
function increaseSpeed(newSpeed, spaceship) {
    if (newSpeed < spaceship.speed) {
        alert("".concat(spaceship.name, " est\u00E1 desacelerando de ").concat(spaceship.speed, " para ").concat(newSpeed));
    }
    else {
        alert("".concat(spaceship.name, " est\u00E1 acelerando de ").concat(spaceship.speed, " para ").concat(newSpeed));
    }
    spaceship.speed = newSpeed;
}
var shipName = prompt("Qual o nome da Nave");
var captainName = prompt("Qual o nome do Capitão?");
var spaceship = sendShip(shipName, captainName);
var speed = Number(prompt("Insira a velocidade da Nave!"));
increaseSpeed(speed, spaceship);
