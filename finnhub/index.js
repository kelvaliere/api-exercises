const symbol = document.getElementById("symbol").value;
const sec = document.getElementById("sec").value;

function GetPrices() {
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

      // make the table elements here
      const body = document.getElementById("tbody");
      let arr = [data.o, data.h, data.l, data.c, data.pc, data.t];

      setInterval(() => {
        const row = document.createElement("tr");

        for (let i = 0; i < arr.length; i++) {
          const cells = document.createElement("td");
          body.append(row);
          row.append(cells);
          cells.append(arr[i]);
        }
      }, sec * 1000);
    });
}
