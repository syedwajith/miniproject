function Signin()
{
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;
    if(username=="syed" && password=="12345")
    {
        window.location.href="home.html";
    }
    else
    {
        alert("Login Failed")
    }
}

