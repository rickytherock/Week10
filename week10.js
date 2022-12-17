document.getElementById('add-row-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let col1Value = document.getElementById('col1-input').value; // get the values of the input fields
  let col2Value = document.getElementById('col2-input').value;
  let col3Value = document.getElementById('col3-input').value;
 
  let newRow = document.createElement('tr');  // create a new table row element
  
  let cell1 = document.createElement('th'); // create the cells for the new row
  let cell2 = document.createElement('td');
  let cell3 = document.createElement('td');
  let cell4 = document.createElement('td');

  cell1.innerHTML = '#'; // set the values of the cells
  cell2.innerHTML = col1Value;
  cell3.innerHTML = col2Value;
  cell4.innerHTML = col3Value;

  newRow.appendChild(cell1);  // append the cells to the new row
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);
 
  let tableBody = document.getElementById('table-body'); // get the table body element and append the new row to it
  tableBody.appendChild(newRow);

  document.getElementById('col1-input').value = ''; // clear the input fields
  document.getElementById('col2-input').value = '';
  document.getElementById('col3-input').value = '';
});

