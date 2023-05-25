const prodPrice = document.getElementsByClassName("prod-price");
const cartImage = document.getElementById("cartImage");
const productFullName = document.querySelector(".text-muted.text-nowrap");

const cartInfo = JSON.parse(localStorage.getItem("product"));

cartImage.src = `../../assets/images/${cartInfo.productImage}`;
productFullName.innerHTML = cartInfo.productName;

for (let index = 0; index < 3; index++) {
    console.log(prodPrice[index], cartInfo.productPrice);
  prodPrice[index].innerHTML = cartInfo.productPrice;
}
