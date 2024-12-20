function showIMC(weight, height) {
  return calculateIMC(weight, height).then((state) => {
    console.log(`O resultado do IMC foi -> ${state}`);
  }).catch((error) =>{
    console.log(`Um erro ocorreu: ${error}`)
});
}

function calculateIMC(weight, height) {
  return new Promise((resolve, reject) => {
    if (!isNaN(weight) && !isNaN(height)) {
      const IMC = weight / Math.pow(height, 2);
      let state;
      if (IMC < 18.5) {
        state = "Magreza";
      } else if (IMC <= 24.9) {
        state = "Normal";
      } else if (IMC <= 29.9) {
        state = "Sobrepeso";
      } else if (IMC <= 39.9) {
        state = "Obesidade";
      } else {
        state = "Obesidade Grave";
      }
      resolve(state);
    } else {
      reject("ERRO PAPAYUUYYY");
    }
  });
}

const p = showIMC("aa23", 1.75);
