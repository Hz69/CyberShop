const setLoggedIn = sessionStorage.getItem("auth");

const authSpace = document.getElementById("auth-status");

if (setLoggedIn === "true") {
  sessionStorage.removeItem("auth");
  authSpace.innerHTML = "Login";
}

function login() {
  sessionStorage.setItem("auth", true);
}
