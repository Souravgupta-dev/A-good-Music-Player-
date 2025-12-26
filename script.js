function checkLogin(){
    let num=document.getElementById("ID").value;
    let pass=document.getElementById("PASS").value;
    let idto="9064312608";
    let passy="sourav";
    if(num==idto && pass==passy){
        alert("Good To GO");
        window.location.href="home.html";
    }else{
        alert("Wrong_Credientials")
    }
}