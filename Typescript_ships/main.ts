// Criando a classe da Nave pra usar ao invés de criar um objeto lá
class spaceShip {
  name: string | null;
  pilot: string | null;
  crewLimit: number;
  crew: string[];
  inMission: boolean = false;

  // Construtor da classe pra fazer o startup
  constructor(name: string | null, pilot: string | null, crewLimit: number) {
    this.name = name;
    this.pilot = pilot;
    this.crewLimit = crewLimit;
  }

  // Função para incluir um membro na Nave
  newMember() {
    let person: any = prompt("Qual o nome do novo membro?");
    // Verificando se a Nave já está cheia
    if (this.crew.length < this.crewLimit) {
      this.crew.push(person);
      alert(
        `${person} acaba de se juntar a tripulação da gloriosa ${this.name}!`
      );
    } else {
      alert("A nave está cheia!");
    }
  }

  // Função para começar a Missão da Nave
  startJourney() {
    // Verificando se a Nave não está em alguma missão
    if (!this.inMission) {
      // Verificando se a nave tem ao menos 1/3 da tripulação preenchida para iniciar missão
      if (this.crew.length >= Math.floor(this.crewLimit / 3)) {
        this.inMission = true;
        alert(`${this.name} está iniciando sua Jornada na Galáxia!`);
      } else {
        alert(`${this.name} não tem 1/3 da sua Tripulação necessária!`);
      }
    } else {
      alert(`${this.name} já está em sua Jornada!`);
    }
  }
}

// O Hangar de naves, um Array que recebe vários Objetos
let HANGAR: spaceShip[] = [];

function buildNewShip() {
  let shipName: string | null = prompt("Qual o Nome da Nave?");
  let pilotName: string | null = prompt("Qual o Nome do piloto?");
  let sizePrompt: string | null = prompt("Quantos tripulantes cabem na Nave?");

  // Caso o infeliz não digite nada o tamanho da Crew vai ser 1 por default kkkkk
  let crewSize: number = parseInt(
    typeof sizePrompt == "string" ? sizePrompt : "1"
  );

  HANGAR.push(new spaceShip(shipName, pilotName, crewSize));
  alert(
    `A nave ${shipName} conduzida pelo almirante ${pilotName} acabou de entrar no hangar!`
  );
}

function showHangar(): string {
  const ships: string = HANGAR.reduce(
    (s, ship) => s + `${HANGAR.indexOf(ship)} - ${JSON.stringify(ship)}\n`,
    ""
  );
  return ships;
}

function pickShip(): spaceShip {
  let shipIndex: any = prompt(
    `Escolha uma nave para executar a Ação:\n\n${showHangar()}`
  );
  return HANGAR[parseInt(shipIndex)];
}

function main() {
  while (true) {
    let option: string | null = prompt(
      "Escolha o que fazer\n1 - Nova Nave\n2 - Adicionar Tripulante\n3 - Enviar em Missão\n 4 - Listar Naves"
    );
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
        alert(`Exibindo as Naves estacionadas no hangar:\n\n${showHangar()}`);
        break;
      default:
        alert("Escolha uma Opção Válida!!");
    }
  }
}

main()