class sign{
    constructor(Fname,Lname,Uname,rollN,pass,cpass){
        this.Fname=Fname;
        this.Lname=Lname;
        this.Uname=Uname;
        this.rollN=rollN;
        this.pass=pass;
        this.cpass=cpass;
    }
}
var users=[];
var usercount=0;
function signup(){
let fname=document.getElementById('firstName').value;
let lname=document.getElementById('lastName').value;
let uname=document.getElementById('username').value;
let rolln=document.getElementById('rollnumber').value;
let Pass=document.getElementById('password').value;
let cPass=document.getElementById('Cpassword').value;
    if(isequal(Pass,cPass)==true){
    if(fname!="" && lname!="" && uname!="" && rolln!="" && Pass!="" && cPass!=""){
    const data=new sign(fname,lname,uname,rolln,Pass,cPass);
    users.push(data);
    localStorage.setItem(`users${usercount}`,JSON.stringify(data));
    alert('Successfully Registered');
    localStorage.setItem("Ucount",JSON.stringify(usercount));
    usercount++;
    aftersign();
    }
        else{
            alert('kindly Give Complete Details');
        }
    }
    else{
        alert('Password & Confirm Password must be Same');
    }
}

function isequal(Pass,cPass){
if(Pass==cPass){
    return true;
}
else{
    return false;
}
}

function login(){
let match=false;
const count=localStorage.getItem('Ucount');
for(let M=0;M<=count;M++){
    const data=JSON.parse(localStorage.getItem(`users${M}`));
    users.push(data);
}
let user=document.getElementById('logname').value;
let Pass=document.getElementById('logpass').value;
if(user=="" || Pass==""){
    alert('Kindly Give complete Details');
}
else{
for(var i=0;i<users.length;i++){
    if(user==users[i].Uname && Pass==users[i].pass){
        match=true;
        alert('Welcome to Online Quiz Application');
        window.close('project.html');
        window.open('quiz.html');
        break;
    }
    else{
        match=false;
    }
}
if(match==false){
    alert('Sorry Incorrect Username or Password');
    document.getElementById('logname').value='';
    document.getElementById('logpass').value='';
}
}
}



function aftersign(){
    document.getElementById('firstName').value="";
    document.getElementById('lastName').value="";
    document.getElementById('username').value="";
    document.getElementById('rollnumber').value="";
    document.getElementById('password').value="";
    document.getElementById('Cpassword').value="";  
}

function change(){
document.getElementById('loginform').style.display='block';
document.getElementById('signupform').style.display='none';
document.getElementById('register').innerHTML=`<b>Log In</b>`;
}
function change1(){
    document.getElementById('loginform').style.display='none';
    document.getElementById('signupform').style.display='block';
    document.getElementById('register').innerHTML='<b>Registration Form</b>';
}

formsubmit.addEventListener("click",function(event){
    event.preventDefault();
});
isalready.addEventListener("click",function(event){
    event.preventDefault(); 
});
loginformsubmit.addEventListener("click",function(event){
    event.preventDefault();
});
formsubmit1.addEventListener("click",function(event){
    event.preventDefault();
});
