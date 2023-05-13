let data= [];

function renderTable() {

    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        const row = document.createElement("tr");
        const name = document.createElement("td");
        name.innerText = data[i].name;
        const number = document.createElement("td");
        number.innerText = data[i].number;
        row.appendChild(name);
        row.appendChild(number);
        tableBody.appendChild(row);
    }
}

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
}

function addData() {

    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    
    data.push({ name: name, number: number });
    renderTable();
    clearForm();
}

function updateData() {

    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const index = document.getElementById("update").getAttribute("data-index");

    data[index].name = name;
    data[index].number = number;
    renderTable();
    clearForm();

    document.getElementById("add").style.display = "inline-block";
    document.getElementById("update").style.display = "none";
}

function deleteData() {

    const index = document.getElementById("update").getAttribute("data-index");
    data.splice(index, 1);
    renderTable();
    clearForm();

    document.getElementById("add").style.display = "inline-block";
    document.getElementById("update").style.display = "none";
}


// Getting the ID´S of the main components

document.getElementById("add").addEventListener("click", addData);
document.getElementById("update").addEventListener("click", updateData);
document.getElementById("delete").addEventListener("click", deleteData);
document.getElementById("clear").addEventListener("click", clearForm);

document.getElementById("table-body").addEventListener("click", function(event) {

    const row = event.target.parentNode;
    const index = row.rowIndex - 1;
    document.getElementById("name").value = data[index].name;
    document.getElementById("number").value = data[index].number;
    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "inline-block";
    document.getElementById("update").setAttribute("data-index", index);

});

renderTable();