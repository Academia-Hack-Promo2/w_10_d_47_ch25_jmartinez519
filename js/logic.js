var people = [];
var keys = [];
var values = [];

function table(){
  a = {
    "cedula": "18619519",
    "nombre": "Jonathan",
    "apellido": "Martinez",
    "correo": "jamm@jmartinezm.org"
  };
  people.push(a);
  b = {
    "cedula": "16617579",
    "nombre": "Alberto",
    "apellido": "Mercado",
    "correo": "jamm@outlook.com"
  };
  people.push(b);
}

// La manera mas eficiente de iterar la encontre en stackoverflow
// http://stackoverflow.com/questions/26552749/best-way-to-iterate-array-of-hashes-javascript

function tohtml(i){

    for (var key in people[i]) {
      if (people[i].hasOwnProperty(key)) {
        keys.push(key);
        values.push(people[i][key]);
      }
    }
  // console.log(keys);
  console.log(values);
}

table();
tohtml(0);

// Modo de insertar nuevos rows al tbody de table
// http://stackoverflow.com/questions/18333427/how-to-insert-row-in-html-table-body-in-javascript

var tableRef = document.getElementsByTagName('tbody')[0];

// Insert a row in the table at the last row
var newRow   = tableRef.insertRow(tableRef.rows.length);

// Insert a cell in the row at index 0
var newCell  = newRow.insertCell(0);
var newText  = document.createTextNode(values[0]);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(1);
var newText  = document.createTextNode(values[1]);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(2);
var newText  = document.createTextNode(values[2]);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(3);
var newText  = document.createTextNode(values[3]);
newCell.appendChild(newText);

tohtml(1);

var newRow   = tableRef.insertRow(tableRef.rows.length);

// Insert a cell in the row at index 0
var newCell  = newRow.insertCell(0);
var newText  = document.createTextNode(values[4]);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(1);
var newText  = document.createTextNode(values[5]);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(2);
var newText  = document.createTextNode(values[6]);
newCell.appendChild(newText);

var newCell  = newRow.insertCell(3);
var newText  = document.createTextNode(values[7]);
newCell.appendChild(newText);


// function start() {
//         // get the reference for the body
//         var mybody = document.getElementsByTagName("body")[0];

//         // creates <table> and <tbody> elements
//         mytable     = document.createElement("table");
//         mytablehead = document.createElement("thead");
//         mytablebody = document.createElement("tbody");

//         // creating all cells
//         for(var j = 0; j < 2; j++) {
//             // creates a <tr> element
//             mycurrent_row = document.createElement("tr");

//             for(var i = 0; i < 2; i++) {
//                 // creates a <td> element
//                 mycurrent_cell = document.createElement("td");
//                 // creates a Text Node
//                 currenttext = document.createTextNode("cell is row " + j + ", column " + i);
//                 // appends the Text Node we created into the cell <td>
//                 mycurrent_cell.appendChild(currenttext);
//                 // appends the cell <td> into the row <tr>
//                 mycurrent_row.appendChild(mycurrent_cell);
//               }
//             // appends the row <tr> into <tbody>
//             mytablebody.appendChild(mycurrent_row);
//           }

//         // appends <tbody> into <table>
//         mytable.appendChild(mytablebody);
//         // appends <table> into <body>
//         mybody.appendChild(mytable);
//         // sets the border attribute of mytable to 2;
//         mytable.setAttribute("border","2");
//       }
