function enable()
{
    var check = document.getElementById("c1");
    var button = document.getElementById("r1");
    if(check.checked)
    {
        button.removeAttribute("disabled")
    }
    else
    {
        button.disabled=true;
    }
}
function reg()
{
    var username = document.getElementById("uname").value;
    var email = document.getElementById("e1").value;
    var password = document.getElementById("pwd").value;
    var confirm = document.getElementById("cpwd").value;
    if(username.length==0)
    {
        alert("Please,fill the user block");
    }
    else if(email.length==0)
    {
        alert("Please,fill the email block");
    }
    else if(password.length==0)
    {
        alert("Please,fill the password block");
    }
    else if(confirm.length==0)
    {
        alert("Please,fill the confirm password block");
    }
    else if(password!=confirm)
    {
        alert("Password is mismatch")
    }
    else
    {
        alert("Registered Successfully");
        window.location.href="login.html";
    }
}
