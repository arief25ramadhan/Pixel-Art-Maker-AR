/*
Udacity Pixel Art Maker Project
By: Arief Ramadhan
*/

var tableForm = document.querySelector('#pixelCanvas'); //Select a table element with ID pixelCanvas
var submitForm = document.querySelector('#sizePicker'); //Select a form element with ID sizePicker
var clearAll = document.querySelector('#clearAll'); //Select a button element with ID clearAll

//Add an event listener to the submitForm
submitForm.addEventListener('submit',function(event){
  event.preventDefault(); //Prevent default action
  //Select input sizes
  var height = submitForm.querySelector('#inputHeight').value;
  var width = submitForm.querySelector('#inputWidth').value;
  makeGrid(height, width);//Generate a table using the submitted input sizes as parameters
})

//Function to make the table blocks (rows x cells)
function makeGrid(n, m) {

  tableForm.innerHTML = ''; //Clear table
  
  //Create rows based on input height
  for (var i = 0; i < n; i++){
    var row = tableForm.insertRow(i);
    //Create cells based on input width
    for(var j = 0; j < m; j++){
      var cell = row.insertCell(j);}
    
  //Add event listener to the generated table blocks
  row.addEventListener('click', function(event){
    var color = document.querySelector('#colorPicker').value; //Select color input
    event.target.style.backgroundColor = color; //Implement the color to the clicked table block
  })
  //
  tableForm.appendChild(row); //Add the generated table blocks to the table
  }
}

//Add event listener to the clearAll button 
clearAll.addEventListener('click', function(){ //If the clearAll button is clicked
  while (tableForm.firstChild){ //While table block exists
    tableForm.firstChild.remove();} //Remove table block
  })
