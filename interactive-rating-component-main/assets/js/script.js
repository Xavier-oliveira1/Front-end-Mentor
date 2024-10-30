//Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    //Selects all class="choice" and puts in varibale
    let listItems = document.getElementsByClassName("choice")

    //Loop through each element that containe the class="choice" and add a click event listener

    for(let i = 0; i< listItems.length; i++) {
        let element = listItems[i];
        element.addEventListener("click", function(){

            //Reset the style of all elements
            for(let j = 0; j<listItems.length; j++){
                listItems[j].style.backgroundColor ="";
                listItems[j].style.color ="";

            }

            //Set the style of the clicked element
            this.style.backgroundColor = "hsl(25, 97%, 53%)"
            this.style.color = "hsl(213, 19%, 18%)"
        
        //Sends the input data to the result.js
        //The name of the output is "value" and it passes the variable rest 
        let rest = i+1
        sessionStorage.setItem("value", rest);
        
        })
        
   
    }

    
       
    
    

    //Submit Button

    document.getElementById("submit-btn").onclick = function(){
        window.location.href = "result.html"//Replace with your target page URL
    }


  
    
})