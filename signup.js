function isValid(){
    var name= document.querySelector("input[name='name']").value;
    var pass= document.querySelector("input[name='pass']").value;
    var cpass= document.querySelector("input[name='cpass']").value;
    var mail= document.querySelector("input[name='mail']").value;
    var username= document.querySelector("input[name='username']").value;
    

    if(name=="") {
        alert("Name is required");
        return false;
    }
    else if(/\b[a-zA-Z]/.test(username)==false||/\W/.test(username)==true){
        alert("Usernames only starts with alphabets and contains alphabets,numbers,underscore");
        return false;
     }
    else if(/.com\b/.test(mail)==false){
        alert("Invalid Email");
        return false;
    }
    else if( pass.length<6||/\d/.test(pass)==false||/[A-Z]/.test(pass)==false ){
        alert("Password must be minimum 6 characters and consists at least one Number and one uppercase letter");
        return false;
    }
    else if(pass.valueOf()!==cpass.valueOf()){
        alert("Password not confirmed");
        return false;
    }
}