//登录框js
//查找触发事件的元素
//查找要修改的元素
var log=document.querySelector("header>div:nth-child(2)");
var login_box=log.nextElementSibling;
var a=document.querySelector("header>div.nav_box>div.nav>ul:nth-child(4)>li:last-child>a");
//绑定事件处理函数
a.onclick=function(){
  var a=this;
  //修改元素
  log.style.display="block";
  login_box.style.display="block";
  //点击×关闭登录框
  //查找触发事件的元素
  var cha=document.querySelector("header>div:nth-child(3)>div:first-child>p:first-child");
  //绑定事件处理函数
  cha.onclick=function(){
    var cha=this;
    //修改元素
    log.style.display="none";
    login_box.style.display="none";
  }  
}
//登录格式验证
//查找触发事件的元素
var form=document.forms[0];
var btn=form.lastElementChild;
var txtName=form.username;
var txtPwd=form.pwd;
//用户名文本框验证
txtName.onblur=function(){
  vali(this,/^([A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4})|(1[3-8]\d{9})$/)
}
//密码框验证
txtPwd.onblur=function(){
  vali(this,/^\w{6,18}$/)
}


  