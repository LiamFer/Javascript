function sendShip(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 10,
    inMission: true,
    crew: [],
  };
  alert(
    `A nave ${spaceship.name} comandada por ${spaceship.captain} foi enviada para uma missão!`
  );
  return spaceship;
}

function increaseSpeed(
  newSpeed: number,
  spaceship: { name: string; speed: number }
) {
  if (newSpeed > spaceship.speed) {
    alert(
      `${spaceship.name} está desacelerando de ${spaceship.speed} para ${newSpeed}`
    );
  } else {
    alert(
      `${spaceship.name} está acelerando de ${spaceship.speed} para ${newSpeed}`
    );
  }
  spaceship.speed = newSpeed;
}
