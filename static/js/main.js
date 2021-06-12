     
function GenerateAkan() 
{
    var DD = parseInt(document.getElementById("date").value);
    var MM = parseInt(document.getElementById("month").value);
    var year = document.getElementById("year").value;
    var gender=document.getElementsByName('gender');


    if(DD<=0 || DD>31)
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
                        var singleDigits = year.toString().split('');
                        var firstNumber = singleDigits[0];
                        var secondNumber = singleDigits[1];
                        var thirdNumber = singleDigits[2];
                        var fourthNumber = singleDigits[3];
        
                        var CC = parseInt(firstNumber.concat(secondNumber));
                        var YY = parseInt(thirdNumber.concat(fourthNumber));
        
                        d = (((CC/4) -2*CC-1) + (5*YY/4) + (26*(MM+1)/10) + DD) % 7;
                        d = Math.round(d);
                         if(gender == "male")
                         {
                             akanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
                             result = akanNames[d];
                             document.getElementById("showAkan").innerHTML += result;
                         }
                         else if(gender == "female")
                         {
                             akanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
                             result = akanNames[d];
                             document.getElementById("showAkan").innerHTML += result;
                         }
                         document.getElementById("showAkan").innerHTML+=d  ;
                        //   document.getElementById("showAkan").innerHTML+=YY  ;
                        //  document.getElementById("showAkan").innerHTML+=thirdNumber  ;
                        //  document.getElementById("showAkan").innerHTML+=fourthNumber ;
                        // if(gender == "male")
                        // {
                        //     akanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
                        //     result = akanNames[d];
                        //     document.getElementById("showAkan").innerHTML = result;
                        // }
                        // else if(gender == "female")
                        // {
                        //     akanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
                        //     result = akanNames[d];
                        //     document.getElementById("showAkan").innerHTML = d;
                        // }
                        
                
                   
                }
            }

            
        }
        
    }
    
}
    