const { createElement } = require("react");

function GetPrices() {
  const symbol = document.getElementById("symbol").value; // to define the variable at the API link

  // fetching the API
  fetch(
    `https://api.finnhub.io/api/v1/quote?symbol=${symbol}&token=d8761mpr01ql0hskeai0d8761mpr01ql0hskeaig`,
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("open").textContent = "$" + data.o;
      document.getElementById("high").textContent = "$" + data.h;
      document.getElementById("low").textContent = "$" + data.l;
      document.getElementById("current").textContent = "$" + data.c;
      document.getElementById("previous-close").textContent = "$" + data.pc;
      document.getElementById("time").textContent = data.t;

      // appending each
      const row = document.createElement("td");
    });
}
