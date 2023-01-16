let idSection = (document.querySelectorAll('#id')[0] as HTMLInputElement).placeholder = "darkshadow12";
// idSection.placeholder = "darkshadow12";
const userLoginName = (document.querySelector('#basic-addon1') as HTMLSpanElement);
// const showUserLoginName = userLoginName.textContent = "Kullanıcı Adı";
const userLoginPassword = (document.querySelector('#basic-addon2') as HTMLSpanElement);
// const showUserLoginPassword = userLoginPassword.textContent = "Şifre";
// let basic_addon = (document.querySelector('#basic-addon1')as HTMLInputElement)!;
// basic_addon.value = "a";
let passwordSection = (document.querySelector('#password') as HTMLInputElement)!;
passwordSection.placeholder = "******";


let collectAllInfos:string[] = [
    userLoginName.textContent = "Kullanıcı Adı",
    userLoginPassword.textContent = "Şifre"
];


