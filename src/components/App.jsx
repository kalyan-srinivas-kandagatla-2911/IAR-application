  import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "", 
    password:""
});

function validatechange(){
  if((contact.fName).length<=1){
    alert("invalid form, please enter name")
    return
  }
  if(contact.lName.length<10||contact.lName.length>12){
  alert("invalid Phone Number")
return}
  if((contact.email).length==0){
    alert("invalid form, please enter email")
    return
  }

  for(let j=0;j<contact.lName.length;j++){
    if(isNaN(contact.lName[j])){
    alert("invalid form, phone number cannot contain non-numerics")
    return}
  }

  let countUpperCase = 0
  // variable to count lowercase characters in the password.
  let countLowerCase = 0
  // variable to count digit characters in the password.
  let countDigit = 0
  // variable to count special characters in the password.
  let countSpecialCharacters = 0

  for (let i = 0; i < (contact.password).length; i++) {
    const specialChars = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '-',
      '+',
      '=',
      '[',
      '{',
      ']',
      '}',
      ':',
      ';',
      '<',
      '>',
    ]

    if (specialChars.includes((contact.password)[i])) {
      // this means that the character is special, so increment countSpecialCharacters
      countSpecialCharacters++
    } else if (!isNaN((contact.password)[i] * 1)) {
      // this means that the character is a digit, so increment countDigit
      countDigit++
    } else {
      if ((contact.password)[i] == (contact.password)[i].toUpperCase()) {
        // this means that the character is an upper case character, so increment countUpperCase
        countUpperCase++
      }
      if (contact.password[i] == contact.password[i].toLowerCase()) {
        // this means that the character is lowercase, so increment countUpperCase
        countLowerCase++
      }
    }
  }

  if (countLowerCase == 0) {
    // invalid form, 0 lowercase characters
    alert('Invalid Form, 0 lower case characters in password')
    return
  }

  if (countUpperCase == 0) {
    // invalid form, 0 upper case characters
    alert('Invalid Form, 0 upper case characters in password')
    return
  }

  if (countDigit == 0) {
    // invalid form, 0 digit characters
    alert('Invalid Form, 0 digit characters in password')
    return
  }

  if (countSpecialCharacters == 0) {
    // invalid form, 0 special characters characters
    alert('Invalid Form, 0 special characters in password')
    return
  }


  alert("valid form")
}

    function handleChange(event){
const{name,value}=event.target;
setContact((prevValue)=>{
  if(name==="fName"){
    return{fName:value,
    lName:prevValue.lName,
    email:prevValue.email,
  password:prevValue.password};
  }
  else if(name==="lName"){
    return{fName:prevValue.fName,
    lName:value,
    email:prevValue.email,
  password:prevValue.password};
  }
  else if(name==="email"){
    return{fName:prevValue.fName,
    lName:prevValue.lName,
    email:value,
  password:prevValue.password};
  }
  else if(name=="password"){
    return{fName:prevValue.fName,
    lName:prevValue.lName,
  email:prevValue.email,
password:value}
  };
});
    }
    
  return (
    <div>
    <div className="container">
      <h1>
        Sign in {contact.fName} 
        
      </h1>
      {/* <p>{contact.email}</p> */}
      <form>
        <input onClick={handleChange}  name="fName" placeholder=" Name" />
        <input  onClick={handleChange}  name="lName" placeholder="Phone" />
        <input onClick={handleChange}  name="email" placeholder="Email" />
        <input onClick={handleChange}name="password"placeholder="password"/>
        <button type="submit" onClick={() => {
          console.log(contact.fName.length);
            validatechange()
          }}>Submit</button>
        
      </form>
      <p>Fill the above form to reach out to our team for any queries or details!</p>
    </div>
    
    </div>
  );
}

export default App;
