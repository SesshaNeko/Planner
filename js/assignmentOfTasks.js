scr = "js\exector.js";
scr = "js\blacklog.js";

var assignmentOfTasks=[];

for (var i = 0; i < exectorId.length; i++) {
  for (var j = 0; j < tasksExecutor.length; j++){
    
    if (exectorId[i] == tasksExecutor[j]) {
      assignmentOfTasks[j]={
        id:[j+1],
        surname: exectors[i].surname,
        firstName: exectors[i].firstName,
        task: tasks[j].subject,
        start: tasks[j].planStartDate,
        end: tasks[j].planEndDate
      }
    }
  }
}

var Name=[];
for(var i = 0; i<assignmentOfTasks.length; i++){
  Name[i] = assignmentOfTasks[i].surname + " " + assignmentOfTasks[i].firstName;
}

// function addRow(tableID) {
//   // Get a reference to the table
//   var tableRef = document.getElementById(tableID);

//   // Insert a row in the table at row index 0
//   var newRow = tableRef.insertRow(0);

//   // Insert a cell in the row at index 0
//   var newCell = newRow.insertCell(0);

//   // Append a text node to the cell
//   var newText = document.createTextNode('New top row');
//   newCell.appendChild(newText);
// }

// // Call addRow() with the ID of a table
// addRow(1);