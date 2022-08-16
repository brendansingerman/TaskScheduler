console.log("Linked")
var hours = ["9", "10", "11"]

var containerElement = document.getElementsByClassName('container')

function populateTable(){
    for(let i=0; i<hours.length;i++){
        console.log("looping")
        containerElement[0].innerHTML+=`<div class="row">
            <h3 class="col-2 time-block hour">
              ${hours[i]}:00
            </h3>
            <textarea class="col-8 ${checkClass(hours[i])}">
    
            </textarea>
            <button class="col-2 saveBtn"> Save Task</button>
          </div>`
    }
}

function checkClass(time){
    if(time<10){ return "past"}
    if(time >10 && time <=11){return "present"}
    return "future"
}

window.onload = populateTable()