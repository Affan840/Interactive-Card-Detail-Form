let form = document.querySelector("form");
let thanksMsg = document.querySelector(".thanks-msg");
let names = document.querySelector("#name");
let number = document.querySelector("#number");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let cvc = document.querySelector("#cvc");
let msg = document.querySelectorAll(".msg");
let continueBtn = document.querySelector(".continue");

let cardNumber = document.querySelector(".number");
let cardName = document.querySelector(".name");
let cardMonth = document.querySelector(".month");
let cardYear = document.querySelector(".year");
let cardCvc = document.querySelector(".cvc");
number.addEventListener("input", () => {
  let formattedNumber = number.value.replace(/(\d{4})(?=\d)/g, "$1 ");
  document.querySelector("#number").value = formattedNumber;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameChecker(names.value);
  cardNumberChecker(number.value);
  expiryDate(month.value, year.value);
  cvcChecker(cvc.value);

    if (
      nameChecker(names.value) &&
      cardNumberChecker(number.value) &&
      expiryDate(month.value, year.value) &&
      cvcChecker(cvc.value)
    ) {
      cardNumber.textContent = number.value;
      cardName.textContent = names.value;
      cardMonth.textContent = month.value;
      cardYear.textContent = year.value;
      cardCvc.textContent = cvc.value;
      form.style.display = "none";
        thanksMsg.style.display = "flex";
    }   
});

function nameChecker(names) {
  if (!names) {
    msg[0].style.display = "block";
  } else {
    msg[0].style.display = "none";
        return true;
  }
}

function cardNumberChecker(number) {
  let flag = /[a-zA-Z]/.test(number);
  
  if (!number) {
    msg[1].textContent = "Can't be blank";
    msg[1].style.display = "block";
  } else if (flag) {
    msg[1].textContent = "Wrong format,numbers only";
    msg[1].style.display = "block";
  } else {
    msg[1].style.display = "none";
    return true;
  }
}

function expiryDate(month, year) {
    if (!month || !year) {
        msg[2].style.display = "block";
    }
    else {
        msg[2].style.display = "none";
            return true;
    }
}

function cvcChecker(cvc) {
    if (!cvc) {
        msg[3].style.display = "block";
    } else {
        msg[3].style.display = "none";
            return true;
    }
}

continueBtn.addEventListener("click", () => {
    thanksMsg.style.display = "none";
    form.style.display = "flex";
    form.submit();
});