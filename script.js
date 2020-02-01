function saveInformation(){
    console.log($("#timeBlockOne").val());
    localStorage.setItem("9",$("#timeBlockOne").val())  
    localStorage.setItem("10",$("#timeBlockTwo").val())  
    localStorage.setItem("11",$("#timeBlockThree").val())
    localStorage.setItem("12",$("#timeBlockFour").val())  
    localStorage.setItem("13",$("#timeBlockFive").val())  
    localStorage.setItem("14",$("#timeBlockSix").val())  
    localStorage.setItem("15",$("#timeBlockSeven").val()) 
    localStorage.setItem("16",$("#timeBlockEight").val())
    localStorage.setItem("17",$("#timeBlockNine").val())

}
function retriveInformation(){
    timeclock()
    var time= moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(time);
    $("#timeBlockOne").val(localStorage.getItem("9"))
    $("#timeBlockTwo").val(localStorage.getItem("10"))
    $("#timeBlockThree").val(localStorage.getItem("11"))
    $("#timeBlockFour").val(localStorage.getItem("12"))
    $("#timeBlockFive").val(localStorage.getItem("13"))
    $("#timeBlockSix").val(localStorage.getItem("14"))
    $("#timeBlockSeven").val(localStorage.getItem("15"))
    $("#timeBlockEight").val(localStorage.getItem("16"))
    $("#timeBlockNine").val(localStorage.getItem("17"))

}

function timeclock(){
    setInterval(function(){
        var time= moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(time);
        }, 1000);
   
}






