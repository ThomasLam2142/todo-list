let obj = {};

function myFunction(){
    console.log("button pressed")
    let text = document.getElementsByClassName('text-box')[0].value;
    console.log(text)
    obj = obj + JSON.stringify(text)
    console.log(obj)
}

