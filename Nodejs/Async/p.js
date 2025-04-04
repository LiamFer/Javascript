const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw error("abugulé");
      let div = "adc" / 5;
      console.log(div);
      resolve(div);
    } catch (error) {
      console.log(error);
      reject(false);
    }
  }, 1000 * 5);
});

console.log("Rodando o programa");
