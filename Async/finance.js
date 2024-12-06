async function updateAmount() {
  const response = await fetch("http://localhost:3000/transactions").then(
    (response) => response.json()
  );
  document.getElementById("moneyAmount").textContent = response.reduce(
    (accumulator, el) => {
      return (accumulator += Number.parseFloat(el.value));
    },
    0
  );
}

async function buildScreen() {
  const response = await fetch("http://localhost:3000/transactions").then(
    (response) => response.json()
  );

  response.forEach((el) => {
    let log = document.createElement("p");
    log.textContent = `ID ${el.id} | ${el.name} made a transaction of ${el.value}`;
    document.getElementById("allTransactions").append(log);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateAmount();
  buildScreen();
});

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

  updateAmount();
});

const delForm = document.getElementById("delTransaction");
delForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const response = await fetch(
    `http://localhost:3000/transactions/${
      document.getElementById("delID").value
    }`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
});
