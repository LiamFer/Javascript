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
  document.getElementById("allTransactions").remove();
  const allData = document.createElement("div");
  allData.id = "allTransactions";
  document.getElementById("TransactionsBox").append(allData);
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
  buildScreen();
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
  updateAmount();
  buildScreen();
});

const editForm = document.getElementById("editTransaction");
editForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const changeData = {
    name: document.getElementById("editNome").value,
    value: document.getElementById("editValor").value,
  };

  const response = await fetch(
    `http://localhost:3000/transactions/${
      document.getElementById("editID").value
    }`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeData),
    }
  );
  updateAmount();
  buildScreen();
});
