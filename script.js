var table = document.getElementById("sampleTable");

function insert_Row() {
    //Write your code here
	  // Create a new row element
            var newRow = table.insertRow(0); // 1 indicates the position (top) to insert the row

            // Create cells for the new row
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            // Populate the cells with data
            cell1.innerHTML = "New Cell1";
            cell2.innerHTML = "New Cell2";
}