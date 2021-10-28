import React from "react";
import "./crud_building.css";

export default function CrudIncident() {
  return (
    <body className="crud_building_body">
      <div className="crud_building">
        <h1 class="title">Hello!</h1>
        <h3 class="title1">Register an Incident</h3>
        <div class="container">
          <table>
            <tr>
              <td>
                <form
                  onsubmit="event.preventDefault();onFormSubmit();"
                  autocomplete="off"
                >
                  <div>
                    <label>Visitor Name</label>
                    <label
                      class="validation-error hide"
                      id="vNameValidationError"
                    >
                      This field is required.
                    </label>
                    <input type="text" name="vName" id="vName" />
                  </div>
                  <div>
                    <label>Incident</label>
                    <input type="text" name="iName" id="iName" />
                  </div>

                  <div class="form-action-buttons">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                  </div>
                </form>
                <td>
                  <table class="list" id="incidentList">
                    <thead>
                      <tr>
                        <th>Visitor Name</th>
                        <th>Incident Associated</th>
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
