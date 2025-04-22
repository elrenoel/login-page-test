let inputPw = document.getElementById("password");
let hidePw = document.getElementById("hide-pw")

inputPw.addEventListener('input', function () {
    if (inputPw.value) {
        hidePw.style.display = "block";
    } else {
        hidePw.style.display = "none";
    }
});

hidePw.addEventListener('click', function(){
    if(inputPw.type == "password"){
        inputPw.type = "text";
        hidePw.src = "../asset/logo/view.png";
    }else{
        inputPw.type = "password";
        hidePw.src = "../asset/logo/hide.png"
    }
});