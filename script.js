const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const h1 = document.querySelector(".h1");

function fname_lname() {
  h1.textContent = `${fname.value} ${lname.value}`;
  fname.value = "";
  lname.value = "";
}
