// Criando a classe da Nave pra usar ao invés de criar um objeto lá
var spaceShip = /** @class */ (function () {
    // Construtor da classe pra fazer o startup
    function spaceShip(name, pilot, crewLimit) {
        this.crew = [];
        this.inMission = false;
        this.name = name;
        this.pilot = pilot;
        this.crewLimit = crewLimit;
    }
    // Função para incluir um membro na Nave
    spaceShip.prototype.newMember = function () {
        var person = prompt("Qual o nome do novo membro?");
        // Verificando se a Nave já está cheia
        if (this.crew.length < this.crewLimit) {
            this.crew.push(person);
            alert("".concat(person, " acaba de se juntar a tripula\u00E7\u00E3o da gloriosa ").concat(this.name, "!"));
        }
        else {
            alert("A nave está cheia!");
        }
    };
    // Função para começar a Missão da Nave
    spaceShip.prototype.startJourney = function () {
        // Verificando se a Nave não está em alguma missão
        if (!this.inMission) {
            // Verificando se a nave tem ao menos 1/3 da tripulação preenchida para iniciar missão
            if (this.crew.length >= Math.floor(this.crewLimit / 3)) {
                this.inMission = true;
                alert("".concat(this.name, " est\u00E1 iniciando sua Jornada na Gal\u00E1xia!"));
            }
            else {
                alert("".concat(this.name, " n\u00E3o tem 1/3 da sua Tripula\u00E7\u00E3o necess\u00E1ria!"));
            }
        }
        else {
            alert("".concat(this.name, " j\u00E1 est\u00E1 em sua Jornada!"));
        }
    };
    return spaceShip;
}());
// O Hangar de naves, um Array que recebe vários Objetos
var HANGAR = [];
function buildNewShip() {
    var shipName = prompt("Qual o Nome da Nave?");
    var pilotName = prompt("Qual o Nome do piloto?");
    var sizePrompt = prompt("Quantos tripulantes cabem na Nave?");
    // Caso o infeliz não digite nada o tamanho da Crew vai ser 1 por default kkkkk
    var crewSize = parseInt(typeof sizePrompt == "string" ? sizePrompt : "1");
    HANGAR.push(new spaceShip(shipName, pilotName, crewSize));
    alert("A nave ".concat(shipName, " conduzida pelo almirante ").concat(pilotName, " acabou de entrar no hangar!"));
}
function showHangar() {
    var ships = HANGAR.reduce(function (s, ship) { return s + "".concat(HANGAR.indexOf(ship), " - ").concat(JSON.stringify(ship), "\n"); }, "");
    return ships;
}
function pickShip() {
    var shipIndex = prompt("Escolha uma nave para executar a A\u00E7\u00E3o:\n\n".concat(showHangar()));
    return HANGAR[parseInt(shipIndex)];
}
function main() {
    while (true) {
        var option = prompt("Escolha o que fazer\n1 - Nova Nave\n2 - Adicionar Tripulante\n3 - Enviar em Missão\n 4 - Listar Naves");
        switch (option) {
            case "1":
                buildNewShip();
                break;
            case "2":
                pickShip().newMember();
                break;
            case "3":
                pickShip().startJourney();
                break;
            case "4":
                alert("Exibindo as Naves estacionadas no hangar:\n\n".concat(showHangar()));
                break;
            default:
                alert("Escolha uma Opção Válida!!");
        }
    }
}
main();
