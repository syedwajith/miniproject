function Signin()
{
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;
    if(username.length==0)
    {
        alert("Please enter the username");
    }
    else if(password.length==0)
    {
        alert("Please enter the password");
    }
    else if(password!=password)
    {
        alert("Please enter the correct password")
    }
    else if(username=="syed" && password=="123")
    {
        window.location.href="home.html";
    }
    else
    {
        alert("Login Failed")
    }
}

