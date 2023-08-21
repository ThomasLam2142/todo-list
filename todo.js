
//obj contains the content for the todolist elements
let obj = [];



function myFunction(){
    console.log("button pressed")
    let text = document.getElementsByClassName('text-box')[0].value;
    console.log(text)

    //add text to array
    obj.push(text)
    console.log(obj)
    addElement(obj)
    //addRemoveButton(obj)
}


function addElement(obj) {
    // create a new div element
    let objlen = obj.length;

    const newdiv = document.createElement("div");
    
    //divNum is Identifier for the Objects
    const divNum = "divNum" + objlen;
    console.log(divNum)
    newdiv.setAttribute("id",divNum)

    //Create new list element and append the text
    const newli = document.createElement("li");
    const newContent = document.createTextNode(obj[objlen-1]);
    
    //Create the Checkbox
    const newcheck = document.createElement("INPUT");
    newcheck.setAttribute("type","checkbox");
    
    //Create the button
    const newbtn = document.createElement("button");
    
    newbtn.setAttribute("class","removeButton");
    newbtn.classList.add(divNum);

    newbtn.addEventListener('click', function () {
    // Call removeClick function and pass through divNum
    removeClick(newbtn.classList[1]);
    });

    console.log(newbtn.classList)


    //this is my main problem right now. Cant pass through the param using setAttribute
    //might be able to us setAtribute ID to get the click function to work.
    //newbtn.setAttribute("onclick",'removeClick()');
    const removebtnContent = document.createTextNode("Remove");
    newbtn.appendChild(removebtnContent);

    //APPEND THE EVERYTHING TO THE DIV
    newdiv.appendChild(newli);
    newli.appendChild(newContent);
    newli.appendChild(newcheck);
    newli.appendChild(newbtn);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("todo-pop");
    document.body.insertBefore(newdiv, currentDiv);
    
  }

//Function on Clicking the remove button
function removeClick(divNum){
    console.log(divNum);
    const element = document.getElementById(divNum);
    element.remove(); // Removes the div with the 'div-02' id

}



