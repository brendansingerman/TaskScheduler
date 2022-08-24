console.log("Linked");
var hours = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
const saveBtns = document.getElementsByClassName("saveBtn");

console.log(saveBtns);

var containerElement = document.getElementsByClassName("container");

function populateTable() {
  for (let i = 0; i < hours.length; i++) {
    console.log("looping");
    containerElement[0].innerHTML += `<div class="row">
            <h3 class="col-2 time-block hour">
              ${hours[i]}:00
            </h3>
            <textarea class="col-8 ${checkClass(hours[i])}" id="${i}">
    
            </textarea>
            <button class="col-2 saveBtn"> Save Task</button>
          </div>`;
  }
}

function checkClass(time) {
  var now = moment().hours();
  console.log(now);
  // for(let i=0;i<hours.length;i++){
  //     console.log(hours[i])
  // }
  console.log(time);
  if (time < now) {
    return "past";
  }
  // if(time >now)
  if (time == now) {
    return "present";
  }

  return "future";
}
window.onload = populateTable();
for (let i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", function () {});
  // saveBtn.addEventListener('click', function onClick() {
  //     console.log('clicked')
  // })
  // write function for sending to local storage when save is pressed, write function to pull from local storage if it exists
}
