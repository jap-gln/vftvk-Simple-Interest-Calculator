// Below function is the script for the compute interest button. This function calculates the simple interest button.
function compute()
{
    var principal = document.getElementById("principal").value;
    // Shows an alert window if principal amount is less than or equal to zero.
    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    // 
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = (principal * rate* years)/100;
        var year = new Date().getFullYear() + parseInt(years); 
        document.getElementById("result").innerHTML="If you deposit \<mark>" + principal + "\</mark>,\<br\>at an interest rate of \<mark>" + rate + "\%</mark>\<br\>You will receive an amount of \<mark>" + interest + "\</mark>,\<br\>in the year \<mark>" + year + "\</mark>\<br\>"; 
    }
}
// 

// Below function is for the input range. This function will show the rate of interest on sliding.
function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal + "%";
}
// 
        