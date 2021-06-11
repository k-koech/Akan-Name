     
function GenerateAkan() 
{
    if(document.getElementById("date").value<=0 || document.getElementById("date").value>31)
    {
        alert("Enter a valid date!");
    }
    else
    {
        if(document.getElementById("month").value<1 || document.getElementById("month").value>12)
        {
            alert("Enter a valid month!");
        }
        else
        {
            if(document.getElementById("year").value=="")
            {
                alert("Please enter the value of the year!");
            }

            
        }
        
    }
    
}
    