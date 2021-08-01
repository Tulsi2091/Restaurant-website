function validateRegisterForm() 
{
    var name = document.getElementById("name").value;
    if (name == "") 
    {
        document.getElementById("NameWarning").innerHTML = "** Empty Name not allowed";
        return false;
    }
    else 
    {
        var i;
        for (i in name)
        {
            if ( (name[i] >='a' && name[i]<='z') || (name[i] >='A' && name[i]<='Z') || name[i]==' ')
            {
                document.getElementById("NameWarning").innerHTML = "";
            }
            else
            {
                document.getElementById("NameWarning").innerHTML = "** Name accepts only alphabets";
                return false;
            }
        }
    }
    var email = document.getElementById("mail").value;
    var atposition = email.indexOf("@");  
    var dotposition = email.lastIndexOf(".");
    if(email=="")
    {
		document.getElementById("MailWarning").innerHTML="** Please fill the email field";
		return false;
	}
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {
		document.getElementById("MailWarning").innerHTML="** Invalid Email! Please enter a valid email id ";
        return false;
	}
    else
    {
        document.getElementById("MailWarning").innerHTML="";
    }
    var pass = document.getElementById("pwd").value;
    var repass = document.getElementById("conpwd").value;
    if (pass.length<8)
    {
        document.getElementById("PWDWarning").innerHTML = "** Password should contain minimum 8 characters";
        return false;
    }
    else
    {
        var a=b=c=0;
        for (i in pass)
        {
            if (pass[i]>='a' && pass[i]<='z')
            {
                a=1;
            }
            else if (pass[i]>='A' && pass[i]<='Z')
            {
                b=1;
            }
            else if (pass[i]>='0' && pass[i]<='9')
            {
                c=1;
            }
        }
        if (a!=1 || b!=1 || c!=1)
        {
            document.getElementById("PWDWarning").innerHTML = "** Password should contain uppercase, lowercase and digit";
            return false;
        }
        else
        {
            document.getElementById("PWDWarning").innerHTML = "";
        }
        if (repass!=pass)
        {
            document.getElementById("ConPWDWarning").innerHTML = "** Re-Password doesn't match with original Password";
            return false;
        }
        if(repass == pass)
        {
           document.getElementById("PWDWarning").innerHTML = "";
           document.getElementById("ConPWDWarning").innerHTML = "";
        }
        var LoginForm = document.getElementById("LoginForm");
        var RegForm = document.getElementById("RegForm");
        var Indicator = document.getElementById("Indicator");
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
        return false;
    }
}

function validateLoginForm()
{
    var email = document.getElementById("loginmail").value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf("."); 
    if(email=="")
    {
		document.getElementById("LoginMailWarning").innerHTML="** Please fill the email field";
		return false;
	}
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {
		document.getElementById("LoginMailWarning").innerHTML="** Invalid Email! Please enter a valid email id ";
        return false;
	}
    else
    {
        document.getElementById("LoginMailWarning").innerHTML="";
    }
    if (email != document.getElementById("mail").value)
    {
        document.getElementById("LoginMailWarning").innerHTML="** Invalid Email id! No registered account";
        return false;
    }
    else
    {
        document.getElementById("LoginMailWarning").innerHTML="";
    }
    var pass = document.getElementById("loginpwd").value;
    if (pass.length<8)
    {
        document.getElementById("LoginPWDWarning").innerHTML = "** Password should contain minimum 8 characters";
        return false;
    }
    else
    {
        var a=b=c=0;
        for (i in pass)
        {
            if (pass[i]>='a' && pass[i]<='z')
            {
                a=1;
            }
            else if (pass[i]>='A' && pass[i]<='Z')
            {
                b=1;
            }
            else if (pass[i]>='0' && pass[i]<='9')
            {
                c=1;
            }
        }
        if (a!=1 || b!=1 || c!=1)
        {
            document.getElementById("LoginPWDWarning").innerHTML = "** Password should contain uppercase, lowercase and digit";
            return false;
        }
        if(pass!=document.getElementById("pwd").value)
        {
            document.getElementById("LoginPWDWarning").innerHTML = "** Incorrect Password ";
            return false;
        }
        else
        {
            document.getElementById("LoginPWDWarning").innerHTML = "";
        }
    }
}