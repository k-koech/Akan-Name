function GenerateAkan() 
{
    var DD = document.getElementById("date").value;
    var MM = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender=document.getElementsByName('gender');


    if(DD<=0 || DD>31 || DD=="")
    {
        alert("Enter a valid date!");
    }
    else
    {
        if(MM<1 || MM>12)
        {
            alert("Enter a valid month!");
        }
        else
        {
            if(year=="")
            {
                alert("Please enter the value of the year!");
            }
            else if(year.length<4)
            {
                alert("Year must have 4 digits!");
            }
            else
            {
                if(!(gender[0].checked || gender[1].checked))
                {
                    alert("Please Select Your Gender!");
                }
                else
                {
                    if (document.getElementById("gender1").checked) 
                        {
                            gender = document.getElementById("gender1").value;
                        }
                    if (document.getElementById("gender2").checked) 
                        {
                            gender = document.getElementById("gender2").value;
                        }
                                              
                        var digits = year.toString().split('');
                        var firstDigit = digits[0];
                        var secondDigit = digits[1];
                        var thirdDigit = digits[2];
                        var fourthDigit = digits[3];
                       
                        DD = parseInt(DD)
                        MM = parseInt(MM)
                        var CC = parseInt(firstDigit.concat(secondDigit));
                        var YY = parseInt(thirdDigit.concat(fourthDigit));
        
                        d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
                        d = Math.round(d);
                         if(gender === "male")
                         {
                             akanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
                             days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

                             akanName = akanNames[d];
                             document.getElementById("showAkan").innerHTML = "<p class='bg-success'>"+akanName+"</p>";
                             document.getElementById("showDay").innerHTML = "Born on <strong>"+days[d]+"</strong>";

                         }
                         else if(gender === "female")
                         {
                             akanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
                             days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

                             akanName = akanNames[d];
                             document.getElementById("showAkan").innerHTML = "<p class='bg-success'>"+akanName+"</p>";
                             document.getElementById("showDay").innerHTML = "Born on <strong>"+days[d]+"</strong>";

                         }                                
                   
                }
            }

            
        }
        
    }
    
}
    
