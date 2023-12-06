// let switchCtn = document.querySelector("#switch-cnt").remove
// let switchC1 = document.querySelector("#switch-c1");
// let switchC2 = document.querySelector("#switch-c2");
// let switchCircle = document.querySelectorAll(".switch__circle");
// let switchBtn = document.querySelectorAll(".switch-btn");
// let aContainer = document.querySelector("#a-container");
// let bContainer = document.querySelector("#b-container");
// let allButtons = document.querySelectorAll(".submit");
// let allInputs = document.querySelectorAll("input");
// let sgnInEml = document.querySelector('input[name="sgnInEml"]');
// let sgnInPswrd = document.querySelector('input[name="sgnInPswrd"]');
// let sgnInBtn = document.querySelector("#sgnInBtn");
// let sgnUpFNme = document.querySelector('input[name="sgnUpFNme"]');
// let sgnUpOthNme = document.querySelector('input[name="sgnUpOthNme"]');
// let sgnUpUsNme = document.querySelector('input[name="sgnUpUsNme"]');
// let sgnUpEml = document.querySelector('input[name="sgnUpEml"]');
// let sgnUpPswrd = document.querySelector('input[name="sgnUpPswrd"]');
// let sgnUpCnPswrd = document.querySelector('input[name="sgnUpCnPswrd"]');
let sgnUpBtn = document.querySelector("#sgnUpBtn");
// console.log(sgnInBtn);
// console.log(sgnInEml.value);

// let getButtons = (e) => e.preventDefault();

let changeForm = (e, form) => {
  console.log(e.target.parentElement.lastElementChild, form);
  if (form == "signup") {
    e.target.classList.add("checked");
    e.target.previousElementSibling.remove("checked");
  } else {
    e.target.classList.add("checked");
    e.target.nextElementSibling.remove("checked");
  }
};

let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

// allInputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     if (input.value !== "") {
//       input.classList.add("has-val");
//     } else {
//       input.classList.remove("has-val");
//     }
//   });
// });

// window.addEventListener("load", mainF);

// sgnInBtn.addEventListener("click", async () => {
//   let formData = {
//     usNme: sgnInEml.value,
//     pswrd: sgnInPswrd.value
//   };
//   console.log(formData);

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData)
//   };
//   const response = await fetch("http://localhost:8009/user/signin", options);
//   if (response.ok) {
//     let data = await response.json();
//     console.log(data.message);
//     localStorage.setItem("token", JSON.stringify(data.token));
//     let filename = "index.html";
//     let url = window.location.href.replace(/\/[^/]+$/, `/${filename}`);
//     setTimeout(() => {
//       window.location.href = url;
//     }, 800);
//   }
// });

// sgnUpBtn.addEventListener("click", async () => {
//   let id = UniquID();
//   let formData = {
//     id,
//     fNme: sgnUpFNme.value,
//     othNme: sgnUpOthNme.value,
//     usNme: sgnUpUsNme.value,
//     email: sgnUpEml.value,
//     pswrd: sgnUpPswrd.value
//     // cnPswrd: sgnUpCnPswrd.value
//   };
//   console.log(formData);

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData)
//   };
//   const response = await fetch("http://localhost:8009/user/signup", options);
//   if (!response.ok) {
//     console.log("not done...");
//   } else {
//     let data = await response.json();
//     console.log(data);
//     let filename = "form.html";
//     let url = window.location.href.replace(/\/[^/]+$/, `/${filename}`);
//     setTimeout(() => {
//       // window.location.href = url
//       changeForm();
//     }, 800);
//     // console.log("done...");
//   }
// });

function UniquID() {
  console.log(Date.now());
  let id = Date.now().toString(36);
  console.log(id);
  return id;
}

export { changeForm };
