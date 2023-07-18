
// Formulario CRUD
var selectedRow = null
function onFormSubmit() {           
    if (validate()) {                          
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
            resetForm();
    }
}

function readFormData() {       
    var formData = {};              
    formData["nombreCompleto"] = document.getElementById("nombreCompleto").value;
    formData["rut"] = document.getElementById("rut").value;
    formData["numero"] = document.getElementById("numero").value;
    formData["email"] = document.getElementById("email").value;
    formData["pais"] = document.getElementById("pais").value;
    formData["region"] = document.getElementById("region").value;
    return formData;                   
}

function insertNewRecord(data) {
    var table = document.getElementById("voluntarioList").getElementsByTagName('tbody')[0]; 
    var newRow = table.insertRow(table.length);                                         
    cell1 = newRow.insertCell(0);                                                  
    cell1.innerHTML = data.nombreCompleto;                                           
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rut;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.numero;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.pais;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.region;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Editar </a>
                       <a onClick="onDelete(this)">Eliminar </a>`;
}

function resetForm() {                                   
    document.getElementById("nombreCompleto").value = "";
    document.getElementById("rut").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("region").value = "";
    selectedRow = null;
}

function onEdit(td) {                               
    selectedRow = td.parentElement.parentElement;  
    document.getElementById("nombreCompleto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rut").value = selectedRow.cells[1].innerHTML;
    document.getElementById("numero").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("pais").value = selectedRow.cells[4].innerHTML;
    document.getElementById("region").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombreCompleto;
    selectedRow.cells[1].innerHTML = formData.rut;
    selectedRow.cells[2].innerHTML = formData.numero;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.pais;
    selectedRow.cells[5].innerHTML = formData.region;
}

function onDelete(td) {
    if (confirm('Estas seguro de eliminar esta persona ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("voluntarioList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("rut").value == "") {
        isValid = false;
        document.getElementById("rutValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("rutValidationError").classList.contains("hide"))
            document.getElementById("rutValidationError").classList.add("hide");
    }
    return isValid;
}

//Array método filter
const users = [
    { uid: 1, name: "Sofia", cargo: "Reclutadora" },
    { uid: 2, name: "Javiera", cargo: "Organizadora" },
    ];

    const mayor = users.filter((user) => user.cargo = "Reclutadora");
    console.log(mayor);