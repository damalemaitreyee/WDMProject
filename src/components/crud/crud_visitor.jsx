import "./crud_visitor.css"

export default function CrudVisitor() {
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

    formData["vName"] = document.getElementById("vName").value;
    //formData["oName"] = document.getElementById("oName").value;

    return formData;
  }

  function insertNewRecord(data) {
    var table = document
      .getElementById("visitorList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.vName;
    //var cell2 = newRow.insertCell(1);
    //cell2.innerHTML = data.oName;

    var cell3 = newRow.insertCell(1);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
  }

  function resetForm() {
    document.getElementById("vName").value = "";
    //document.getElementById("oName").value = "";

    selectedRow = null;
  }

  function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("vName").value = selectedRow.cells[0].innerHTML;
    //document.getElementById("oName").value = selectedRow.cells[1].innerHTML;
  }
  function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.vName;
    //selectedRow.cells[1].innerHTML = formData.oName;
  }

  function onDelete(td) {
    var result = window.confirm("Want to delete?");
    if (result) {
      var row = td.parentElement.parentElement;
      document.getElementById("visitorList").deleteRow(row.rowIndex);
      resetForm();
    }
  }
  function validate() {
    var isValid = true;
    if (document.getElementById("vName").value == "") {
      isValid = false;
      document.getElementById("vNameValidationError").classList.remove("hide");
    } else {
      isValid = true;
      if (
        !document
          .getElementById("vNameValidationError")
          .classList.contains("hide")
      )
        document.getElementById("vNameValidationError").classList.add("hide");
    }

    return isValid;
}
    return (
        <body className="crud_visitor_body">
    <div className="crud_visitor">
      
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
                  <label>Visitor Name#</label>
                  <label className="validation-error hide" id="vNameValidationError">
                    This field is required.
                  </label>
                  <input type="text" name="vNum" id="vNum" />
                </div>
                

                <div className="form-action-buttons">
                  <input type="submit" value="Submit" />
                  <input type="reset" value="Reset" />
                </div>
              </form>
              <td>
                <table className="list" id="visitorList ">
                  <thead>
                    <tr>
                      
                      <th>Visitor Name</th>
                      <th>Edit/Delete</th>
                    </tr>
                    <tr>
                     
                      <td>Visitor 01</td>
                      <td>
                        <a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>{" "}
                      </td>
                    </tr>

                    <tr>
                      
                      <td>Visitor 02</td>
                      <td>
                        <a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>{" "}
                      </td>
                    </tr>
                    <tr>
                      
                      <td>Visitor 03</td>
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
    
    )
}
