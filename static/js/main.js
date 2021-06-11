     
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
            DD = document.getElementById("date").value;
            MM = document.getElementById("month").value;
            year = document.getElementById("year").value;

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

                var CC = firstNumber.concat(secondNumber);
                var YY = thirdNumber.concat(fourthNumber);

                d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
                d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
                
                
                d = Math.round(d);
                if(gender == "male")
                {
                    akanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
                    result = akanNames[d];
                    document.getElementById("showAkan").innerHTML = result;
                }
                else if(gender == "female")
                {
                    akanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
                    result = akanNames[d];
                    document.getElementById("showAkan").innerHTML = d;
                }

        }
        
    }
    
}
    