/*
Udacity Pixel Art Maker Project
By: Arief Ramadhan
*/

var tableForm = document.querySelector('#pixelCanvas');
var submitForm = document.querySelector('#sizePicker');
var clearAll = document.querySelector('#clearAll');

submitForm.addEventListener('submit',function(event){
  event.preventDefault();
  var height = submitForm.querySelector('#inputHeight').value;
  var width = submitForm.querySelector('#inputWidth').value;
  makeGrid(height, width);
})

function makeGrid(n, m) {

  tableForm.innerHTML = '';

  for (var i = 0; i < n; i++){
    var row = tableForm.insertRow(i);
    for(var j = 0; j < m; j++){
      var cell = row.insertCell(j);}

  row.addEventListener('click', function(event){
    var color = document.querySelector('#colorPicker').value;
    event.target.style.backgroundColor = color;
  })

  tableForm.appendChild(row);
  }
}

clearAll.addEventListener('click', function(){
  while (tableForm.firstChild){
    tableForm.firstChild.remove();}
  })
