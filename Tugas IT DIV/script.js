function validateLogin(){
    let x= document.getElementById("email").value;
    let y= document.getElementById("password").value;
    if ((x=='')||(y=='')){
        alert("Email dan password harus diisi");

    }else{
       
        window.location.replace("./home.html");
    }
}

function validateRegister(){
    const name= document.getElementById("name").value;
    const email= document.getElementById("email2").value;
    const gender= document.getElementById("gender").value;
    const city= document.getElementById("city").value;
    const pass= document.getElementById("password2").value;
    const cpass= document.getElementById("password3").value;

    if((name=='')||(email=='')||(pass=='')||(cpass=='')||!gender||!city){
        alert("Prompt harus diisi");
    }else if(pass!=cpass){
        alert("Password tidak sama");
    }else if(!validatePass(pass)){
        alert("Password minimal memiliki 8 karakter, dan mengandung setidaknya satu huruf kapital serta satu angka.")
    }
    
    else{
        window.location.replace("./home.html");
    }
}

const validatePass = (pass)=>{
    const passwordarray=pass.split("")
    if(passwordarray.length <8){
        return false
    }
    var uppercase=0
    var number=0
    for (char of passwordarray){
        if (char==char.toUpperCase()&&isNaN(char)){

            uppercase++;

        }
        if(!isNaN(char)){
            number++;
        }

    }
    if (uppercase>0 && number>0){
        return true;
    }else{
        return false;
    }
}