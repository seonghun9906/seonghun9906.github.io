function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  }

  const emailCheck = () => {

    

    
  }
  


  const phoneNumber_check = () => {
    const phoneNumber1 = document.getElementById("phoneNumber").value;
    // console.log(phoneNumber1)
    const exp = /^\d{3}-\d{4}-\d{4}$/;
    const exp1 = /^\d{11}$/
    const phoneNumber_check1 = document.getElementById("phoneNumber_check");
    const phoneNumber_check2 = document.getElementById("phoneNumberCheck");
    if(phoneNumber1.length ==0){
      phoneNumber_check1.innerText = "전화번호를 입력해 주세요.";
      phoneNumber_check1.style.color = "red";
    }else if(phoneNumber1.match(exp) || phoneNumber1.match){
      phoneNumber_check2.innerText =" 전화번호 인증번호 받기 ";
      phoneNumber_check1.innerText = "올바른 전화번호 형식입니다.";
      phoneNumber_check1.style.color = "green";
    
    }else{
      phoneNumber_check1.innerText = "올바르지 않은 전화번호 형식입니다.";
      phoneNumber_check1.style.color = "red";
    }
  } 
  
  const pass_check = () => {
    const pass_check = document.getElementById("inputPassword").value;
    const pass_check1 = document.getElementById("confirmPassword").value;
    console.log(pass_check);
    console.log(pass_check1);
    const pass_checkh2 = document.getElementById("passwordConfirm")
   if(pass_check.length == 0 && pass_check1.length == 0){
    pass_checkh2.innerText ="비밀번호를 먼저 입력해주세요."
    pass_checkh2.style.color = "red";
  }else if(pass_check===pass_check1 ){
      pass_checkh2.innerText ="비밀번호가 일치합니다."
      pass_checkh2.style.color = "green";
    }else{
      pass_checkh2.innerText ="비밀번호가 일치하지 않습니다."
      pass_checkh2.style.color = "red";
    }
  } 
  const signUp = () => {
    const firstName = document.getElementById("firstName").value; 
    const floatingInput = document.getElementById("floatingInput").value; 
    const confirmPassword = document.getElementById("confirmPassword").value; 
    const lastName = document.getElementById("lastName").value; 
    const phoneNumber = document.getElementById("phoneNumber").value; 
    const address = document.getElementById("address").value; 
    const address2 = document.getElementById("address2").value; 

    if(firstName.length == 0 || lastName.length == 0 || floatingInput.length == 0 || confirmPassword.length == 0 || 
    phoneNumber.length == 0 || address.length == 0 || address2.length == 0){
      alert("입력칸을 빈곳 없게 입력해주세요.");
    }else {
      location.href = "Login.html"
    }
    
  }