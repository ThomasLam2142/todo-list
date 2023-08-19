
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
    
    
    let divNum = "divNum" + objlen;
    console.log(divNum)
    newdiv.setAttribute("id",divNum)

    //newdiv.setAttribute("class",)
    const newli = document.createElement("li");
    const newContent = document.createTextNode(obj[objlen-1]);

    const newcheck = document.createElement("INPUT");
    newcheck.setAttribute("type","checkbox");
  
    // and give it some content
    
  
    // add the text node to the newly created div
    newdiv.appendChild(newli);
    newli.appendChild(newContent);
    newli.appendChild(newcheck);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("todo-pop");
    document.body.insertBefore(newdiv, currentDiv);
    
  }


function addRemoveButton(obj){

    //create Remove Button
    const newbtn = document.createElement("button");
    newbtn.addEventListener('click',removeClick);

    let objlen = obj.length;
    btnNum = 'btnnum'+ objlen
    //Each button has the right class number
    console.log(btnNum)

    //Give remove button classes 
    newbtn.classList.add('removebtn', btnNum)


    const newContent = document.createTextNode("Remove");
    newbtn.appendChild(newContent);

    const currentDiv = document.getElementById("todo-pop");
    document.body.insertBefore(newbtn, currentDiv);
}


function removeClick(btnNum){
    console.log('element clicked 🎉🎉🎉', event);
}
