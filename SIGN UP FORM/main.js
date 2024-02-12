"use strict";
const submitBtn = document.querySelector('button');
const names = ['provide a valid mail','provide a strong pwd', 'input your names', 'input your phone-no']
const emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const number = /[0-9]/g;
const pwd = /[a-z]/g+/[A-Z]/g;
submitBtn.addEventListener('click', () => {
  const inputVal = document.querySelectorAll('input');
  const errorMsg = document.querySelectorAll('.error');
  for(let i = 0; i < inputVal.length; i++) {
    for(let i = 0; i < errorMsg.length; i++) {
      if(inputVal[i].value === ""){
        inputVal[i].classList.add("error");
        errorMsg[i].textContent = names[i]
      }
    }

    if (i === 0 &&  !inputVal[0].value.match(emailFormat)){
      inputVal[i].classList.add("error");
      errorMsg[i].textContent = 'invalid mail'
    }   
    
    if (i === 3 &&  !inputVal[3].value.match(number)){
      inputVal[i].classList.add("error");
      errorMsg[i].textContent = 'invalid number'
    } 
    
    if (i == 1 &&  !inputVal[1].value.match(pwd)){
      inputVal[i].classList.add("error");
      errorMsg[i].textContent = 'pwd not strong'
    }   
  }
}) 