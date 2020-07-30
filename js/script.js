
function valid(){
  var f=document.getElementById("fname").value;
  var l=document.getElementById("lname").value;
  var p=document.getElementById("phno").value;
  var conp=document.getElementById("cphno").value;
  var em=document.getElementById("email").value;
  var cem=document.getElementById("cemail").value;
  var pd=document.getElementById("pwd").value;
  var cpd=document.getElementById("cpwd").value;
  var ad=document.getElementById("add").value;

  if (f==""){
    alert("fill the FirstName");
    return false;
  }
  
  if (l==""){
    alert("fill the LastName");
    return false;
  }
  var m=/^\+[0-9]{2,3}[-.][6-9][0-9]{9}$/;
  if (!m.test(p)){
    alert("give in this format ex: +91-9876543210");
    return false;
  }
  if ((!m.test(conp) || p!=conp)){
    alert("the number didn't match");
    return false;
  }
  var e=/\S+@\S+/;
  if (!e.test(em)){
    alert("enter valid email address");
    return false;
  }
  if((!e.test(em) || em!=cem)){
    alert("email didn't match");
    return false;
  }
  var paswd=/^[A-Z]{1}\w+\W\d+$/
  if (!paswd.test(pd)){
    alert("password must contain atleast one uppercase,lowercase,special symbol and digit");
    return false;
  }
  if((!paswd.test(cpd)) || (cpd!=pd)){
    alert("password didn't match");
    return false;
  }
  if ((ad=="") || (ad.length<15)){
    alert("add your Address less than 10 words");
    return false;
  }
return (true);
}


function login(){
  var user=document.getElementById("username").value;
  var pswd=document.getElementById("pwd").value;
 
  var e=/\S+@\S+/;
  if (!e.test(user)){
    alert("enter valid email address");
    return false;
  }
  var paswd=/^[A-Z]{1}\w+\W\d+$/
  if (!paswd.test(pswd)){
    alert("password must contain atleast one uppercase,lowercase,special symbol and digit");
    return false;
  }
   return true;
}

