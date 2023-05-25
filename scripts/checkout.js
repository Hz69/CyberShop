const form = document.getElementById("checkout-form");
const mainFullPrice = document.getElementById("main-full-price");
const mainTotalPrice = document.getElementById("main-total-price");

const bills = JSON.parse(localStorage.getItem("bill"));

mainFullPrice.innerHTML = bills.mainPrice;
mainTotalPrice.innerHTML = bills.bill;

async function handleSubmit(event) {
  event.preventDefault();
  let data = new FormData(event.target);

  data.append("Main-Price", `$_${bills.mainPrice}`);
  data.append("Shipment-Charge", "$_13");
  data.append("Bill", `$_${bills.bill}`);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Order checkout successfully!");
        location.href = "/index.html";
        localStorage.clear();
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            alert(data["errors"].map((error) => error["message"]).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form");
          }
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

form.addEventListener("submit", handleSubmit);
