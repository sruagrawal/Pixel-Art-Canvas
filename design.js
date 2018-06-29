const canvas = document.getElementById("pixelCanvas");
const sizePick = document.getElementById("sizePicker");
const color = document.getElementById("colorPicker");
var height, width;

sizePick.addEventListener('submit', function(event){
  event.preventDefault();
  height = document.getElementById("inputHeight").value;
  width = document.getElementById("inputWidth").value;
  canvas.innerHTML="";
  makeGrid();
});



function makeGrid(){
  for(let row = 1; row <= height; row++)
  {
    let tr = document.createElement("tr");
    canvas.appendChild(tr);
    for(let col = 1; col <= width; col++)
    {
      let td = document.createElement("td");
      tr.appendChild(td);
      tr.addEventListener('click', function (event){
  event.target.setAttribute('style', 'background-color: ' + color.value);
});
    }
  }
}
