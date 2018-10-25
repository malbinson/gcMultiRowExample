var rowCount = 1;

function createTable() {

    var div = document.getElementById('tableContainer');
    var table = document.createElement("table");
    table.setAttribute("id","mainTable");
    div.appendChild(table);

    addRow();
}

function addRow() {

    var table = document.getElementById("mainTable");
    var fieldRow = document.createElement("tr");
    var labelRow = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var i1 = document.createElement("input");
    var i2 = document.createElement("input");

    var label = document.getElementById("catName").value;
    i1.setAttribute("id","pts" + label);
    i2.setAttribute("id","wgt" + label);

    if(label.length==0){
        label = "Homework";
    }

    td1.innerHTML = label + " Points";
    td2.innerHTML = label + " Weight";

    td3.append(i1);
    td4.append(i2);
    labelRow.append(td1);
    labelRow.append(td2);
    fieldRow.append(td3);
    fieldRow.append(td4);
    table.append(labelRow);
    table.append(fieldRow);

    rowCount++;

    colorRows(fieldRow, labelRow);

}

function colorRows(f,l) {
    if(rowCount % 3 ==0) {
        c = "red";
    }
    if(rowCount % 3 ==1) {
        c = "green"
    }
    if(rowCount % 3 ==2) {
        c = "gray"
    }

    f.setAttribute("class",c);
    l.setAttribute("class",c);

}