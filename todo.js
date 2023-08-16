let obj = {};

function myFunction(){
    console.log("button pressed")
    let text = document.getElementsByClassName('text-box')[0].value;
    console.log(text)
    obj = obj + JSON.stringify(text)
    console.log(obj)
    addElement(obj)
}

function addElement(obj) {
    // create a new div element
    const newDiv = document.createElement("li");
  
    // and give it some content
    const newContent = document.createTextNode(obj);
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }