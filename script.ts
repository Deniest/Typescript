//login sistem
const listAllUserBtn = document.querySelector(
  "#listAllUserBtn"
)! as HTMLButtonElement;
let userId = document.getElementById("id")! as HTMLInputElement;
let userPassword = document.getElementById("password")! as HTMLInputElement;
let button = document.getElementById("send")! as HTMLButtonElement;
let clearButton = document.getElementById("clearBtn")! as HTMLButtonElement;

let date1 = new Date();
let output = date1.toLocaleDateString();
console.log(output);

// interface UserInfos   {
//     userName: string;
//     userPassword: string | number;
//     userLastLogin: Date;
// };

let userList = [
  {
    userName: "squalcan",
    userPassword: "123",
    userMail: "squalcaan@gmail.com",
  },
];

let btnClear = () => {
  userId.value = "";
  userPassword.value = "";
};

// let setIcon = () => {
//     let link:HTMLElement = document.querySelector("link[rel*='icon']")!;

// }

clearButton?.addEventListener("mousedown", btnClear)!;

let loginSection = () => {
  let error1 = document.querySelector(".error1")! as HTMLDivElement;
  let alerted = document.querySelector(".alert")! as HTMLDivElement;
  let msg: HTMLSpanElement = document.createElement("span")!;

  for (let index of userList) {
    if (
      index.userName == userId.value &&
      index.userPassword == userPassword.value
    ) {
      const infosArea = document.querySelector<Element>(".info")!;
      const createDiv1 = document.createElement("div")!; //null dönebilir.
      createDiv1.setAttribute("id", "infoArea");
      msg.setAttribute("id", "message");
      msg.setAttribute("style", "color:green;");
      // let clicked:boolean;
      button.disabled = true;
      //========================== BAŞARILI GİRİŞ TASARIMI
      const accesInfo = document.querySelector(".info");

      let divSuccess = document.createElement("div");
      divSuccess.setAttribute("class", "success-box");
      let h2Success = document.createElement("h2");
      h2Success.textContent = "Giriş başarılı!";
      let paragraphSuccess = document.createElement("p");
      alerted.remove(); //eğer uyarı kutusu oluşmuşsa burada kaldırıyoruz.
      paragraphSuccess.textContent = `Tekrar hoş geldiniz sayın ${userId.value}... Kısa bir süre içerisinde yönlendirileceksiniz. Giriş tarihiniz: ${output}`;
      accesInfo?.appendChild(divSuccess);
      divSuccess.appendChild(h2Success);
      h2Success.appendChild(paragraphSuccess);

      //=========================== başarılı giriş tasarımı bitiş

      // this.msg.textContent = `Giriş başarılı 5 saniye içerisinde yönlendiriliyorsunuz...` + " " + output
      infosArea.appendChild(createDiv1);
      createDiv1.appendChild(msg);
      // self.location="main.html";
      setTimeout(function () {
        window.location.href = "main.html";
      }, 7000);
    } else if (userId.value == "" || userPassword.value == "") {
      console.log("DEBUG : KULLANICI ADI VE YA ŞİFRE BOŞ OLAMAZ!");
      error1.innerHTML =
        '<div class="alert alert-danger" role="alert">Kullanıcı adınız veya şifreniz boş olamaz!</div>';
      error1.onclick = function () {
        error1.style.display = "none";
      };
    } else {
      //YANLIŞ ŞİFRE VEYA KULLANICI ADI GİRİLDİĞİNDE ETKİN OLACAK KOŞUL.
      console.log("wtf");
      const accesInfo = document.querySelector(".info");

      let divError = document.createElement("div");
      divError.setAttribute("class", "error-box");
      let h2Error = document.createElement("h2");
      h2Error.textContent = "Giriş yaparken sorun yaşandı.";
      let pError = document.createElement("p");
      pError.textContent = "Kullanıcı adı veya şifrenizi kontrol ediniz.";
      accesInfo?.appendChild(divError);
      divError.appendChild(h2Error);
      h2Error.appendChild(pError);
      let closeBtn = document.createElement("div");
      h2Error.appendChild(closeBtn);

      closeBtn.innerHTML =
        '<button type="button" id="closeBtn1" class="btn-close btn-close-white" aria-label="Close"></button>';
      closeBtn.onmouseover = function () {
        let reachBtn = document.getElementById(
          "closeBtn1"
        ) as HTMLButtonElement;
        reachBtn?.removeAttribute("class");
        reachBtn?.setAttribute("class", "btn-close btn-close-black");
      };
      closeBtn.onmouseleave = function () {
        let reachBtn = document.getElementById(
          "closeBtn1"
        ) as HTMLButtonElement;
        reachBtn?.removeAttribute("class");
        reachBtn?.setAttribute("class", "btn-close btn-close-white");
      };

      // let click:number = 10;
      let targetDiv = document.querySelectorAll(
        ".error-box"
      )[0] as HTMLDivElement;
      let btnClose = (document.querySelector(
        ".btn-close"
      ) as HTMLButtonElement)!;
      button.disabled = true;

      btnClose.onclick = function () {
        if (targetDiv.style.display !== "none") {
          targetDiv.remove();
          // console.log(click)
          button.disabled = false; //Giriş yap butonunu devre dışı bırakma
        } else {
          targetDiv.remove();
          // console.log(click)
          button.disabled = false; //Giriş yap butonunu devre dışı bırakma
        }

        //en son burada kaldın bunun başarılı giriş versiyonunu yap.
      };
    }
  }
};

var input = document.getElementById("password") as HTMLInputElement;

// KAYIT OLMA YERİ KODLARI BU SCRIPTIN İÇİNDEDİR.

let registerUserId = document.getElementById(
  "registerUserId"
)! as HTMLInputElement;
let registerUserPassword = document.getElementById(
  "registerPassword"
)! as HTMLInputElement;
let registerUserBtn = document.querySelector(
  "#registerUserBtn"
)! as HTMLButtonElement;
let mailRegister = document.querySelector("#mail1")! as HTMLInputElement;

//REGISTER KURALLARI TEKRARDAN DENIYORUM.

function registerUser() {
  for (let index of userList) {
    if (
      mailRegister.value == "" ||
      registerUserId.value == "" ||
      registerUserId.value == " " ||
      registerUserPassword.value == "" ||
      registerUserPassword.minLength == 0
    ) {
      alert("Lütfen bütün bilgileri düzgün giriniz.")!;
      break;
    }

    if (
      mailRegister.value.indexOf(".com") == -1 &&
      mailRegister.value.indexOf(".net") == -1 &&
      mailRegister.value.indexOf(".org") == -1 &&
      mailRegister.value.indexOf(".uk") == -1 &&
      mailRegister.value.indexOf(".cn") == -1 &&
      mailRegister.value.indexOf(".nl") == -1 &&
      mailRegister.value.indexOf(".tk") == -1 &&
      mailRegister.value.indexOf(".icu") == -1 &&
      mailRegister.value.indexOf(".xyz") == -1 &&
      mailRegister.value.indexOf(".top") == -1 &&
      mailRegister.value.indexOf(".online") == -1 &&
      mailRegister.value.indexOf(".site") == -1 &&
      mailRegister.value.indexOf(".wang") == -1 &&
      mailRegister.value.indexOf(".club") == -1 &&
      mailRegister.value.indexOf(".shop") == -1 &&
      mailRegister.value.indexOf(".vip") == -1 &&
      mailRegister.value.indexOf(".club") == -1 &&
      mailRegister.value.indexOf(".work") == -1 &&
      mailRegister.value.indexOf("@") == -1 &&
      mailRegister.value.indexOf("gmail") == -1 &&
      mailRegister.value.indexOf("yahoo") == -1 &&
      mailRegister.value.indexOf("titan") == -1 &&
      mailRegister.value.indexOf("constant") == -1 &&
      mailRegister.value.indexOf("hubspot") == -1 &&
      mailRegister.value.indexOf("sendinblue") == -1 &&
      mailRegister.value.indexOf("aweber") == -1 &&
      mailRegister.value.indexOf("protonmail") == -1 &&
      mailRegister.value.indexOf("outlook") == -1 &&
      mailRegister.value.indexOf("zoho") == -1 &&
      mailRegister.value.indexOf("aol") == -1 &&
      mailRegister.value.indexOf("mail") == -1 &&
      mailRegister.value.indexOf("gmx") == -1 &&
      mailRegister.value.indexOf("icloud") == -1 &&
      mailRegister.value.indexOf("yandex") == -1
    ) {
      console.log("mail");
      let alerted = document.querySelector("#myModal")! as HTMLDivElement;
      const span = document.getElementsByClassName(
        "close"
      )[0] as HTMLSpanElement;
      alerted.style.display = "block";

      span.onclick = function () {
        alerted.style.display = "none";
      };
      break;
    } else {
      userList.push({
        userName: registerUserId.value,
        userPassword: registerUserPassword.value,
        userMail: mailRegister.value,
      });
      break;
    }
  }
}

function listAllUsers() {
  const accessDiv = document.querySelector(".list-group");

  for (let index of userList) {
    let ul = `<li class="list-group-item"><span style="color:red;">Kullanıcı Adı: <span>${index.userName}</span></span> Mail: ${index.userMail}</li>`;

    accessDiv?.insertAdjacentHTML("afterbegin", ul);
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
      (document.getElementById("send") as HTMLButtonElement).click();
    }
  });
}

if (listAllUserBtn) {
  listAllUserBtn.addEventListener("click", listAllUsers)!;
}

if (button) {
  button.addEventListener("click", loginSection)!;
}
