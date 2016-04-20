// JavaScript Document

/*鼠标在昵称文本框中时*/
function nickNameFocus(){
	var nickName=document.getElementById("nickName");
	var nickNameId=document.getElementById("nickName_prompt");
	//email.className="register_input register_input_Focus";
	nickNameId.innerHTML="";
	 //promptId.className="register_prompt";
	}

/*鼠标离开昵称文本框时*/
function nickNameBlur(){
	var nickName=document.getElementById("nickName");
	var nickNameId=document.getElementById("nickName_prompt");
	nickNameId.innerHTML="";
	var reg=/^[a-zA-Z]{4,20}$/;	
     if(nickName.value==""){
	    nickNameId.innerHTML="昵称不能为空，请输入您的昵称";
		//nickNameId.className="register_prompt_error";
		//nickName.className="register_input register_input_Blur";
	return false;
	  }
	  if(reg.test(nickName.value)==false){
	    nickNameId.innerHTML="暂时不支持中文和数字命名";
		//nickNameId.className="register_prompt_error";
		//nickName.className="register_input register_input_Blur";
	return false;
	  }
	
	  //nickNameId.className="register_prompt_ok";
	 // nickName.className="register_input";
	  return true;
}



/*鼠标在email文本框中时*/
function emailFocus(){
	var email=document.getElementById("email");
	var emailId=document.getElementById("email_prompt");
	//email.className="register_input register_input_Focus";
	emailId.innerHTML="";
	 //promptId.className="register_prompt";
	}
	
/*鼠标离开email文本框中时*/	
function emailBlur(){
	var email=document.getElementById("email");
	var emailId=document.getElementById("email_prompt");
	emailId.innerHTML="";
	var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;	
    if(email.value==""){
		emailId.innerHTML="邮箱不能为空，用来登录、接受邮件";
		//promptId.className="register_prompt_error";
		//email.className="register_input register_input_Blur";
		return false;
		 }
	if(reg.test(email.value)==false){
	    emailId.innerHTML="邮箱格式不正确，请重新输入";
		//promptId.className="register_prompt_error";
		//email.className="register_input register_input_Blur";
	    return false;
	  }   
	   
	 // promptId.className="register_prompt_ok";
	 //email.className="register_input";
	 return true;
}

/*鼠标在手机号文本框中时*/
function phoneFocus(){
	var phone=document.getElementById("phone");
	var phoneId=document.getElementById("phone_prompt");
	//email.className="register_input register_input_Focus";
	phoneId.innerHTML="";
	 //promptId.className="register_prompt";
	}

/*鼠标离开手机号文本框时*/
function phoneBlur(){
	var phone=document.getElementById("phone");
	var phoneId=document.getElementById("phone_prompt");
	phoneId.innerHTML="";
	var reg=/^(13|15|18)\d{9}$/;
     if(phone.value==""){
	    phoneId.innerHTML="手机号不能为空，请输入您的手机号";
		//nickNameId.className="register_prompt_error";
		//nickName.className="register_input register_input_Blur";
		return false;
	  }
	  if(reg.test(phone.value)==false){
	    phoneId.innerHTML="手机号码以13，15，18开头且由11位数字组成";
		//nickNameId.className="register_prompt_error";
		//nickName.className="register_input register_input_Blur";
	return false;
	  }
	
	  //nickNameId.className="register_prompt_ok";
	 // nickName.className="register_input";
	  return true;
}


//鼠标在密码文本框时
function pwdFocus(){
	var pwd = document.getElementById("password");
	var pwdId = document.getElementById("password_prompt");
	pwdId.innerHTML="";
	}


//鼠标离开密码文本时
function pwdBlur(){
	var pwd = document.getElementById("password");
	var pwdId = document.getElementById("password_prompt");
	pwdId.innerHTML="";
	
	if(pwd.value==""){
		pwdId.innerHTML="密码不能为空，请输入密码";
		return false;
		}
	if(pwd.value.length <6 || pwd.value.length >16){
		pwdId.innerHTML="密码长度为6-16";
		return false;		
		}
	pwdId.innerHTML="";
	return true;
	}
	
//鼠标放在在此输入密码时
function repwdFocus(){
	var repwd = document.getElementById("repassword");
	var repwdId = document.getElementById("repassword_prompt");
	repwdId.innerHTML="";
	}
	
//鼠标离开再次输入密码时
function repwdBlur(){
	var pwd = document.getElementById("password");
	var repwd = document.getElementById("repassword");
	var repwdId = document.getElementById("repassword_prompt");
	if(repwd.value==""){
		repwdId.innerHTML="密码不能为空，请重新输入密码";
		return false;
		}
	if(repwd.value != pwd.value){
		repwdId.innerHTML="两次密码输入不一致，请重新输入";
		return false;		
		}
	repwdId.innerHTML="";
	return true;
	}

//提交表单时验证表单的正确性
function checkForm(){
	var flagNickName=nickNameBlur();
    	var flagPwd=pwdBlur();
	var flagRepwd=repwdBlur();
	var flagPhone=phoneBlur();
    	var flagEmail=emailBlur();
	  
	nickNameBlur();
	pwdBlur();
	repwdBlur();
	phoneBlur();
	emailBlur();
	  
    	if(flagNickName==true &&flagPwd==true &&flagRepwd==true &&flagPhone==true &&flagEmail==true){
		return true;
		}
  	  else{
		return false;
		}
	}

