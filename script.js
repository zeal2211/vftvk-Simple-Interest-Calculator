function compute()
{
    //Takes reference for input near amount 
    var principal = document.getElementById("principal").value;
    //Checking if input is null or 0 or negative number
    if(principal=="" || principal<1){
        alert("Enter a positive number");
        return document.getElementById("principal").focus();
    }
    //Taking references for elements
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/ 100;
    //Finding the year when you get the total amount
    var year = new Date().getFullYear()+parseInt(years);
    //Changing the result span to show the required answer
    document.getElementById("result").innerHTML="If you deposit "+<font color:"yellow">principal</font>+",\<br\>at an interest rate of "+<font color:"yellow">rate</font>+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year</font>+"\<br\>"
    
}
function updateRate(){
    //Referencing rate
    var rateval = document.getElementById("rate").value;
    //Changing to show the current rate on the range
    document.getElementById("rate_val").innerText = rateval + "%";
}
