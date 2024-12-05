async function newTransaction() {}

const transactionForm = document.getElementById("newTransaction");
transactionForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const transactionData = {
    name: document.getElementById("nome").value,
    value: document.getElementById("valor").value,
  };

  const response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactionData),
  });
});
