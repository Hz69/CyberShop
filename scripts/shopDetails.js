if (sessionStorage.getItem("auth") !== "true") {
  alert("Login required to proceed");
  location.href = "/views/pages/login.html";
}

const opImage = document.getElementById("opImage");
const prodName = document.getElementById("productName");
const prodPrice = document.getElementById("price");

const productInfo = JSON.parse(localStorage.getItem("product"));

opImage.src = `../../assets/images/${productInfo.productImage}`;
prodName.innerHTML = productInfo.productName;
prodPrice.innerHTML = productInfo.productPrice;
