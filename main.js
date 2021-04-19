const setupButton = document.getElementById("setup-button");
const goBackButton = document.getElementById("go-back-button");

setupButton.addEventListener("click", showContent);
goBackButton.addEventListener("click", hideContent);

function showContent() {
  document.getElementById("secondary-content").classList.remove("hide");
  document.getElementById("secondary-content").classList.add("show");
}

function hideContent() {
  document.getElementById("secondary-content").classList.remove("show");
  document.getElementById("secondary-content").classList.add("hide");
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
let parent = this.parentNode;
parent.classList.add("focus");
}

function blurFunc() {
let parent = this.parentNode;
if (this.value == "") {
parent.classList.remove("focus");
}
}

inputs.forEach((input) => {
input.addEventListener("focus", focusFunc);
input.addEventListener("blur", blurFunc);
});

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Recebi sua mensagem!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! Temos um problema, erro ao enviar."
  });
}
form.addEventListener("submit", handleSubmit)
