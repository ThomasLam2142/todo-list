
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



/*
    Need to figure out how to nest stuff in div then use remove button to get rid of entire div

    -Maybe start with learning to enable remove button to print in console
    -then remove any element in the document

*/










function addElement(obj) {
    // create a new div element
    let objlen = obj.length;

    const newdiv = document.createElement("div");
    
    const divNum = "divNum" + objlen;
    console.log(divNum)
    newdiv.setAttribute("id",divNum)

    const newli = document.createElement("li");
    const newContent = document.createTextNode(obj[objlen-1]);

    const newcheck = document.createElement("INPUT");
    newcheck.setAttribute("type","checkbox");
    
    const newbtn = document.createElement("button");
    const btnId= "btn" + objlen;
    newbtn.setAttribute("id",btnId);
    newbtn.setAttribute("class","removeButton");

    //this is my main problem right now. Cant pass through the param using setAttribute
    newbtn.setAttribute("onclick",'removeClick()');
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


function removeClick(btnNum){
    console.log(btnNum);
}


