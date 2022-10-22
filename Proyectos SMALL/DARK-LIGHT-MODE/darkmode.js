const checkbox=document.querySelector("#checkbox");
const mainBody=document.querySelector(".mainBody");

checkbox.addEventListener("click", () => mainBody.classList.toggle("darkBg"));