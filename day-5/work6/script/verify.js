function verifyId_card(){
    var id_card = document.getElementById("id_card");
    
    if(id_card.value.length != 18){
        //alert("身份证号不正确");
        id_card.setAttribute("class", "wrong");
        //id_card.focus();
        return;
    }
    
    

}

function verifyPhone_num(){
    var phone_num = document.getElementById("phone_num");
    if(!validatemobile(phone_num.value)){
        phone_num.setAttribute("class","wrong");
        //phone_num.focus();
        return;
    }
    phone_num.setAttribute("class", "right");

    
}

function verifyEmail(){
    //电子邮箱匹配
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var email = document.getElementById("email");
    if(!reg.test(email.value)){
        //alert("邮箱格式不正确");
        email.setAttribute("class","wrong");
        //email.focus();
        return;
    }
    email.setAttribute("class","right");
}

function verifyAnswer(){
    var answer = document.getElementById("answer");

    //空验证
    if(answer.value == ""){
        //alert("答案不能为空");
        answer.setAttribute("class","wrong");
        answer.focus();
        return;
    }
    answer.setAttribute("class","right");
}

function verifyPoint_out(){
    var point_out = document.getElementById("point_out");
    if(point_out.value == ""){
        //alert("密码提示为必填项");
        point_out.setAttribute("class","wrong");
        point_out.focus();
        return;
    }
    point_out.setAttribute("class","right");
}

function verifyRealname(){
    var realname = document.getElementById("realname");
    if(realname.value == ""){
        realname.setAttribute("class","wrong");
        //alert("姓名不能为空");
        realname.focus();
        return;
    }
    realname.setAttribute("class","right");
}

function verifyUsername(){
    var username = document.getElementById("username");
    if(usernmae.value == ""){
        //alert("用户名不能为空");
        username.setAttribute("class","wrong");
        username.focus();
        return;
    }
    username.setAttribute("class","right");
}

function verifyPassword(){
    var password = document.getElementById("password");
    if(password.value == ""){
        //alert("密码不能为空");
        password.setAttribute("class","wrong");
        password.focus();
        return;
    }
    password.setAttribute("class","right");
}

function verifyRepassword(){
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword");
    if(repassword.value == "" || password != repassword.value){
        repassword.setAttribute("class","wrong");
        //alert("第二次输入的密码与第一次密码不相同");
        //repassword.focus();
        return;
    }
    repassword.setAttribute("class","right");

}

function validatemobile(mobile) { 
    if(mobile.length==0) { 
        return false; 
    } 
    if(mobile.length!=11) { 
        return false; 
    } 

    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
    if(!myreg.test(mobile)) { 
        return false; 
    } 
    return true;
} 
