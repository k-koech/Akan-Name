     
function GenerateAkan() 
{
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender=document.getElementsByName('gender');


    if(date<=0 || date>31)
    {
        alert("Enter a valid date!");
    }
    else
    {
        if(month<1 || month>12)
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
                    if (document.getElementById(gender[0]).checked) 
                        {
                            gender = document.getElementById("gender1").value;
                        }
                    if (document.getElementById(gender[1]).checked) 
                        {
                            gender = document.getElementById("gender2").value;
                        }
                    document.getElementById("showAkan").innerHTML+=date  ;
                    document.getElementById("showAkan").innerHTML+=month  ;
                    document.getElementById("showAkan").innerHTML+=year  ;
                    document.getElementById("showAkan").innerHTML+=gender ;
                }
            }

            
        }
        
    }
    
}
    