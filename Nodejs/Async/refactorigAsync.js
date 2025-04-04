async function showIMC(weight, height) {
  try {
    const state = await calculateIMC(weight, height);
    console.log(`O resultado do IMC foi -> ${state}`);
  } catch (error) {
    console.log(`Um erro ocorreu: ${error}`);
  }
}

async function calculateIMC(weight, height) {
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
    return state;
  } else {
    return Promise.reject("ERRO PAPAYUUYYY");
  }
}

const p = showIMC("23a", 1.75);
