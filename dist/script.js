const listAllUserBtn = document.querySelector("#listAllUserBtn");
const userId = document.getElementById("id");
const userPassword = document.getElementById("password");
const button = document.getElementById("send");
const clearButton = document.getElementById("clearBtn");
const date1 = new Date();
const output = date1.toLocaleDateString();
const userList = [
    {
        userMail: "furkandeniz@gmail.com",
        userName: "furki1337",
        userPassword: "asdasd",
    },
];
function btnClear() {
    userId.value = "";
    userPassword.value = "";
}
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("mousedown", btnClear);
const loginSection = () => {
    let error1 = document.querySelector(".error1");
    let alerted = document.querySelector(".alert");
    let msg = document.createElement("span");
    for (let index of userList) {
        if (index.userName == userId.value && index.userPassword == userPassword.value) {
            const infosArea = document.querySelector(".info");
            const createDiv1 = document.createElement("div");
            createDiv1.setAttribute("id", "infoArea");
            msg.setAttribute("id", "message");
            msg.setAttribute("style", "color:green;");
            button.disabled = true;
            const accesInfo = document.querySelector(".info");
            let divSuccess = document.createElement("div");
            divSuccess.setAttribute("class", "success-box");
            let h2Success = document.createElement("h2");
            h2Success.textContent = "Giriş başarılı!";
            let paragraphSuccess = document.createElement("p");
            alerted.remove();
            paragraphSuccess.textContent = `Tekrar hoş geldiniz sayın ${userId.value}... Kısa bir süre içerisinde yönlendirileceksiniz. Giriş tarihiniz: ${output}`;
            accesInfo === null || accesInfo === void 0 ? void 0 : accesInfo.appendChild(divSuccess);
            divSuccess.appendChild(h2Success);
            h2Success.appendChild(paragraphSuccess);
            infosArea.appendChild(createDiv1);
            createDiv1.appendChild(msg);
            setTimeout(function () {
                window.location.href = "main.html";
            }, 7000);
        }
        else if (userId.value == "" || userPassword.value == "") {
            console.log("DEBUG : KULLANICI ADI VE YA ŞİFRE BOŞ OLAMAZ!");
            error1.innerHTML =
                '<div class="alert alert-danger" role="alert">Kullanıcı adınız veya şifreniz boş olamaz!</div>';
            error1.onclick = function () {
                error1.style.display = "none";
            };
        }
        else {
            const accesInfo = document.querySelector(".info");
            let divError = document.createElement("div");
            divError.setAttribute("class", "error-box");
            let h2Error = document.createElement("h2");
            h2Error.textContent = "Giriş yaparken sorun yaşandı.";
            let pError = document.createElement("p");
            pError.textContent = "Kullanıcı adı veya şifrenizi kontrol ediniz.";
            accesInfo === null || accesInfo === void 0 ? void 0 : accesInfo.appendChild(divError);
            divError.appendChild(h2Error);
            h2Error.appendChild(pError);
            let closeBtn = document.createElement("div");
            h2Error.appendChild(closeBtn);
            closeBtn.innerHTML =
                '<button type="button" id="closeBtn1" class="btn-close btn-close-white" aria-label="Close"></button>';
            closeBtn.onmouseover = function () {
                let reachBtn = document.getElementById("closeBtn1");
                reachBtn === null || reachBtn === void 0 ? void 0 : reachBtn.removeAttribute("class");
                reachBtn === null || reachBtn === void 0 ? void 0 : reachBtn.setAttribute("class", "btn-close btn-close-black");
            };
            closeBtn.onmouseleave = function () {
                let reachBtn = document.getElementById("closeBtn1");
                reachBtn === null || reachBtn === void 0 ? void 0 : reachBtn.removeAttribute("class");
                reachBtn === null || reachBtn === void 0 ? void 0 : reachBtn.setAttribute("class", "btn-close btn-close-white");
            };
            let targetDiv = document.querySelectorAll(".error-box")[0];
            let btnClose = document.querySelector(".btn-close");
            button.disabled = true;
            btnClose.onclick = function () {
                if (targetDiv.style.display !== "none") {
                    targetDiv.remove();
                    button.disabled = false;
                }
                else {
                    targetDiv.remove();
                    button.disabled = false;
                }
            };
        }
    }
};
const input = document.getElementById("password");
let registerUserId = document.getElementById("registerUserId");
let registerUserPassword = document.getElementById("registerPassword");
let registerUserBtn = document.querySelector("#registerUserBtn");
let mailRegister = document.querySelector("#mail1");
function registerUser() {
    for (let index of userList) {
        if (!mailRegister.value ||
            !registerUserId.value ||
            !registerUserId.value ||
            !registerUserPassword.value ||
            !registerUserPassword.minLength) {
            alert("Lütfen bütün bilgileri düzgün giriniz.");
            return;
        }
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!regexp) {
            let alerted = document.querySelector("#myModal");
            const span = document.getElementsByClassName("close")[0];
            alerted.style.display = "block";
            span.onclick = function () {
                alerted.style.display = "none";
            };
            return;
        }
        else {
            userList.push({
                userName: registerUserId.value,
                userPassword: registerUserPassword.value,
                userMail: mailRegister.value,
            });
            return;
        }
    }
}
function listAllUsers() {
    const accessDiv = document.querySelector(".list-group");
    for (let index of userList) {
        let ul = `<li class="list-group-item"><span style="color:red;">Kullanıcı Adı: <span>${index.userName}</span></span> Mail: ${index.userMail}</li>`;
        accessDiv === null || accessDiv === void 0 ? void 0 : accessDiv.insertAdjacentHTML("afterbegin", ul);
    }
    listAllUserBtn.disabled = true;
}
if (registerUserBtn) {
    registerUserBtn.addEventListener("click", registerUser);
}
if (input) {
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            loginSection();
            document.getElementById("send").click();
        }
    });
}
if (listAllUserBtn) {
    listAllUserBtn.addEventListener("click", listAllUsers);
}
if (button) {
    button.addEventListener("click", loginSection);
}
export {};
