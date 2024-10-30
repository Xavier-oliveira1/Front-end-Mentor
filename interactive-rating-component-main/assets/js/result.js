document.addEventListener("DOMContentLoaded", function(){
    
    //Recieve the value from scipt.js when the user clicks on the button Submit
    let receivedData = sessionStorage.getItem("value");


    document.getElementById("selected-number").innerHTML = receivedData

    
})

