var userInput = document.getElementById("user-input");
var formBtn = document.getElementById("form-btn")
var output = document.getElementById("output");
var buttons = document.querySelectorAll(".options button");

var content = "";

function createContent(type) {
    var selectedButton = document.getElementById(type);

  buttons.forEach(function(button) {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");

    switch (type) {
      case "shayari":
        content = type;
        break;
      case "quotes":
        content = type;
        break;
      case "tales":
        content = type;
        break;
      case "story":
        content = type;
        break;
      case "poem":
        content = type;
        break;
      case "song":
        content = type;
        break;
      default:
        content = "Invalid content type.";
        break;
    }

  }

  
  
  function submitUserInput() {
    
    if(content==""){
        alert("Select what you want to generate!")
        return
    }
    // if(userInput==""||userInput==undefined){
    //     alert("please fill a valid input")
    // }

    
    postRequestApi(content,userInput.value)
    
  }
  


  async function postRequestApi(word,keyword){

    let res = await fetch("http://localhost:5000/ask",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({keyword,word})
    })
    let {success,message} = await res.json()
    
    if(success=="false"){
      output.innerHTML = null
      output.innerText = "Unable to generate try again"
      return;
    }
     output.innerHTML = null
     output.innerText = message
  }