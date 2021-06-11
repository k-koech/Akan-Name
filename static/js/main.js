     
function GenerateAkan() 
{
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

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
                var gender=document.getElementsByName('gender');
                if(!(gender[0].checked || gender[1].checked))
                {
                    alert("Please Select Your Gender!");
                }
            }

            
        }
        
    }
    
}
    