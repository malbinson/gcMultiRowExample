var rowCount = 0;

function addRow() {

    var table = document.getElementById('primary');
    var fieldRow = document.createElement("tr");
    var labelRow = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var i1 = document.createElement("input");
    var i2 = document.createElement("input");
    i1.setAttribute("id","id1");
    i2.setAttribute("id","id2");

    var c = "red";

    if(rowCount % 3 ==0) {
        c = "red";
    }
    if(rowCount % 3 ==1) {
        c = "green"
    }
    if(rowCount % 3 ==2) {
        c = "gray"
    }

    td1.setAttribute("class",c);

    var label = document.getElementById("catName").value;
    console.log(label.length);
    if(label.length==0){
        label = "Homework";
    }

    td1.innerHTML = label + " Points";
    td2.innerHTML = label + " Weight";
    td3.appendChild(i1);
    td4.appendChild(i2);

    labelRow.append(td1);
    labelRow.append(td2);

    fieldRow.append(td3);
    fieldRow.append(td4);

    table.append(labelRow);
    table.append(fieldRow);

    rowCount++;

}

function setUpPage() {
    addRow();
    document.getElementById("container").style.background = "pink";
}