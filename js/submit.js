const nameInput = document.querySelector(".name-input");
const mailInput = document.querySelector(".mail-input");
const msgInput = document.querySelector(".msg-input");

const errorName = document.querySelector(".valid-name");
const errorMail = document.querySelector(".valid-mail");
const errorMsg = document.querySelector(".valid-msg");

const btn = document.querySelector(".submit")

btn.addEventListener("click", sendMsg)

function sendMsg() {
    const mailInputValue = mailInput.value;
    const nameInputValue = nameInput.value;
    const msgInputValue = msgInput.value;
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    let ifSendData = true;

    if (nameInputValue.length === 0) {
        errorName.innerHTML = "نام و نام خانوادگی را وارد کنید";
        nameInput.style.borderBottom = " 2px solid #ff0000";
        ifSendData = false;
    } else {
        errorName.innerHTML = "";
        nameInput.style.borderBottom = " 1px solid #fff";
    }
    if (mailInputValue.length === 0) {
        errorMail.innerHTML = "ایمیل خود را وارد کنید";
        mailInput.style.borderBottom = " 2px solid #ff0000";
        ifSendData = false;
    } else if (pattern.test(mailInputValue) === false) {
        errorMail.innerHTML = "ایمیل خود را صحیح وارد کنید";
        mailInput.style.borderBottom = " 2px solid #ff0000";
        ifSendData = false;
    } else {
        errorMail.innerHTML = "";
        mailInput.style.borderBottom = " 1px solid #fff";
    }
    if (msgInputValue.length === 0) {
        errorMsg.innerHTML = "پیامی را وارد کنید";
        msgInput.style.border = " 2px solid #ff0000";
        ifSendData = false;
    } else {
        errorMsg.innerHTML = "";
        msgInput.style.border = " 1px solid #fff";
    } if (ifSendData) {
        var x = document.getElementById("snackbar1");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        localStorage.setItem(`${mailInputValue},${nameInputValue}`, msgInputValue);
    } else {
        var x = document.getElementById("snackbar2");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        localStorage.clear();
    }
}