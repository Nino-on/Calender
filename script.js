var task= new Date();
var hr=task.getHours();

function changeBackground()
//Change color to red
{
if($("#timeBlockOne").attr("time")==hr){
      $("#timeBlockOne").css("background-color","red")
    } if($("#timeBlockTwo").attr("time")==hr){
          $("#timeBlockTwo").css("background-color","red")
        } if($("#timeBlockThree").attr("time")==hr){
              $("#timeBlockThree").css("background-color","red")
            } if($("#timeBlockFour").attr("time")==hr){
                  $("#timeBlockFour").css("background-color","red")
                } if($("#timeBlockFive").attr("time")==hr){
                      $("#timeBlockFive").css("background-color","red")
                    } if($("#timeBlockSix").attr("time")==hr){
                          $("#timeBlockSix").css("background-color","red")
                        } if($("#timeBlockSeven").attr("time")==hr){
                              $("#timeBlockSeven").css("background-color","red")
                            } if($("#timeBlockEight").attr("time")==hr){
                                  $("#timeBlockEight").css("background-color","red")
                                } if($("#timeBlockNine").attr("time")==hr){
                                      $("#timeBlockNine").css("background-color","red")
                                    }
    //change to grey
    if($("#timeBlockOne").attr("time")<hr){
      $("#timeBlockOne").css("background-color","gray")
    } if($("#timeBlockTwo").attr("time")<hr){
          $("#timeBlockTwo").css("background-color","gray")
        } if($("#timeBlockThree").attr("time")<hr){
              $("#timeBlockThree").css("background-color","gray")
            } if($("#timeBlockFour").attr("time")<hr){
                  $("#timeBlockFour").css("background-color","gray")
                } if($("#timeBlockFive").attr("time")<hr){
                      $("#timeBlockFive").css("background-color","gray")
                    } if($("#timeBlockSix").attr("time")<hr){
                          $("#timeBlockSix").css("background-color","gray")
                        } if($("#timeBlockSeven").attr("time")<hr){
                              $("#timeBlockSeven").css("background-color","gray")
                            } if($("#timeBlockEight").attr("time")<hr){
                                  $("#timeBlockEight").css("background-color","gray")
                                } if($("#timeBlockNine").attr("time")<hr){
                                      $("#timeBlockNine").css("background-color","gray")
                                    }
    //change to green
    if($("#timeBlockOne").attr("time")>hr){
          $("#timeBlockOne").css("background-color","green")
        } if($("#timeBlockTwo").attr("time")>hr){
              $("#timeBlockTwo").css("background-color","green")
            } if($("#timeBlockThree").attr("time")>hr){
                  $("#timeBlockThree").css("background-color","green")
                } if($("#timeBlockFour").attr("time")>hr){
                      $("#timeBlockFour").css("background-color","green")
                    } if($("#timeBlockFive").attr("time")>hr){
                          $("#timeBlockFive").css("background-color","green")
                        } if($("#timeBlockSix").attr("time")>hr){
                              $("#timeBlockSix").css("background-color","green")
                            } if($("#timeBlockSeven").attr("time")>hr){
                                  $("#timeBlockSeven").css("background-color","green")
                                } if($("#timeBlockEight").attr("time")>hr){
                                      $("#timeBlockEight").css("background-color","green")
                                    } if($("#timeBlockNine").attr("time")>hr){
                                          $("#timeBlockNine").css("background-color","green")
                                        }
    }


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
    changeBackground()
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








