//文本框验证
function vali(txt,reg){
  if(reg.test(txt.value)){
    txt.nextElementSibling.style.display="none";
    return true;
  }else{
    txt.focus();
    txt.nextElementSibling.style.display="block";
    return false;
  }
}
//登录提交验证
//查找触发事件的元素
var btnSubmit=document.querySelector("div.log>form>input:last-child");
//绑定事件
btnSubmit.onclick=function(){
  //先验证所有表单是否符合要求
  var rName=vali(txtName,/^([A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4})|(1[3-8]\d{9})$/);
  var rPwd=vali(txtPwd,/^\w{6,18}$/);
  if(rName&&rPwd){
    form.submit();
  }
}