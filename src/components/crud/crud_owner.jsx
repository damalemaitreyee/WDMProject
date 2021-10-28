import React from "react";

export default function CrudOwner() {
  var selectedRow = null;

  function onFormSubmit() {
    if (validate()) {
      var formData = readFormData();
      if (selectedRow == null) insertNewRecord(formData);
      else updateRecord(formData);
      resetForm();
    }
  }

  function readFormData() {
    var formData = {};

    formData["aNum"] = document.getElementById("aNum").value;
    formData["oName"] = document.getElementById("oName").value;

    return formData;
  }

  function insertNewRecord(data) {
    var table = document
      .getElementById("aptList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.aNum;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.oName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
  }

  function resetForm() {
    document.getElementById("aNum").value = "";
    document.getElementById("oName").value = "";

    selectedRow = null;
  }

  function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("aNum").value = selectedRow.cells[0].innerHTML;
    document.getElementById("oName").value = selectedRow.cells[1].innerHTML;
  }
  function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.aNum;
    selectedRow.cells[1].innerHTML = formData.oName;
  }

  function onDelete(td) {
    var result = window.confirm("Want to delete?");
    if (result) {
      var row = td.parentElement.parentElement;
      document.getElementById("aptList").deleteRow(row.rowIndex);
      resetForm();
    }
  }
  function validate() {
    var isValid = true;
    if (document.getElementById("aNum").value == "") {
      isValid = false;
      document.getElementById("aNumValidationError").classList.remove("hide");
    } else {
      isValid = true;
      if (
        !document
          .getElementById("aNumValidationError")
          .classList.contains("hide")
      )
        document.getElementById("aNumValidationError").classList.add("hide");
    }

    return isValid;
  }
  return (
    <body className="crud_owner_body">
      <div className="crud_owner">
        <h1 className="title">Hello!</h1>
        <h3 className="title1">Register a Lunamar Building</h3>
        <div className="container">
          <table>
            <tr>
              <td>
                <form
                  onsubmit="event.preventDefault();onFormSubmit();"
                  autocomplete="off"
                >
                  <div>
                    <label>Apartment #</label>
                    <label
                      className="validation-error hide"
                      id="aNumValidationError"
                    >
                      This field is required.
                    </label>
                    <input type="number" name="aNum" id="aNum" />
                  </div>
                  <div>
                    <label>Owner Name</label>
                    <input type="text" name="oName" id="oName" />
                  </div>

                  <div className="form-action-buttons">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                  </div>
                </form>
                <td>
                  <table className="list" id="aptList">
                    <thead>
                      <tr>
                        <th>Apartment #</th>
                        <th>Owner Name</th>
                        <th>Edit/Delete</th>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>Owner 01</td>
                        <td>
                          <a onClick="onEdit(this)">Edit</a>
                          <a onClick="onDelete(this)">Delete</a>{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>02</td>
                        <td>Owner 02</td>
                        <td>
                          <a onClick="onEdit(this)">Edit</a>
                          <a onClick="onDelete(this)">Delete</a>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>03</td>
                        <td>Owner 03</td>
                        <td>
                          <a onClick="onEdit(this)">Edit</a>
                          <a onClick="onDelete(this)">Delete</a>{" "}
                        </td>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </td>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </body>
  );
}
