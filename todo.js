let obj = [];

function myFunction(){
    console.log("button pressed")
    let text = document.getElementsByClassName('text-box')[0].value;
    console.log(text)
    obj.push(text)
    console.log(obj)
    addElement(obj)
    addCheckbox()
    addRemoveButton()
}

function addElement(obj) {
    // create a new div element
    let objlen = obj.length;
    const newli = document.createElement("li");
  
    // and give it some content
    const newContent = document.createTextNode(obj[objlen-1]);
  
    // add the text node to the newly created div
    newli.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("todo-pop");
    document.body.insertBefore(newli, currentDiv);
    
  }

function addCheckbox(){
    console.log("Add Checkbox")
    const newcheck = document.createElement("INPUT");
    newcheck.setAttribute("type","checkbox");

    const currentDiv = document.getElementById("todo-pop");
    document.body.insertBefore(newcheck, currentDiv);

}

function addRemoveButton(){
    console.log("Add Remove Button")
    const newbtn = document.createElement("button");
    const currentDiv = document.getElementById("todo-pop");
    document.body.insertBefore(newbtn, currentDiv);
}

