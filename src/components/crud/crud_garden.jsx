import React from "react";
import "./crud_building.css";

export default function CrudGarden() {
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
                    <label>Garden #</label>
                    <label
                      className="validation-error hide"
                      id="gNumValidationError"
                    >
                      This field is required.
                    </label>
                    <input type="number" name="bNum" id="bNum" />
                  </div>
                  <div>
                    <label>Garden Name</label>
                    <input type="text" name="gName" id="gName" />
                  </div>
                  <div>
                    <label>Any Incident(N/A if none)</label>
                    <input type="text" name="gIncident" id="gIncident" />
                  </div>

                  <div className="form-action-buttons">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                  </div>
                </form>
                <td>
                  <table className="list" id="gardenList">
                    <thead>
                      <tr>
                        <th>Garden #</th>
                        <th>Garden Name</th>
                        <th>Incident</th>
                        <th>Edit/Delete</th>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>Garden 01</td>
                        <td>No</td>
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
