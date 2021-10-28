import React from "react";
import "./crud_building.css"

export default function CrudBuilding() {
  return (
    <body className="crud_building_body">
    <div className="crud_building">
      
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
                  <label>Building #</label>
                  <label className="validation-error hide" id="bNumValidationError">
                    This field is required.
                  </label>
                  <input type="number" name="bNum" id="bNum" />
                </div>
                <div>
                  <label>Building Name</label>
                  <input type="text" name="bName" id="bName" />
                </div>

                <div className="form-action-buttons">
                  <input type="submit" value="Submit" />
                  <input type="reset" value="Reset" />
                </div>
              </form>
              <td>
                <table className="list" id="buildingList">
                  <thead>
                    <tr>
                      <th>Buildings #</th>
                      <th>Building Name</th>
                      <th>Edit/Delete</th>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Buildin 01</td>
                      <td>
                        <a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>02</td>
                      <td>Buildin 02</td>
                      <td>
                        <a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Buildin 03</td>
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
