import React from "react";
import "./crud_building.css";

export default function CrudPlant() {
  return (
    <body className="crud_building_body">
      <div className="crud_building">
        <h1 class="title">Hello!</h1>
        <h3 class="title1">Register a Lunamar Plant</h3>
        <div class="container">
          <table>
            <tr>
              <td>
                <form
                  onsubmit="event.preventDefault();onFormSubmit();"
                  autocomplete="off"
                >
                  <div>
                    <label>Plant #</label>
                    <label
                      class="validation-error hide"
                      id="pNumValidationError"
                    >
                      This field is required.
                    </label>
                    <input type="number" name="pNum" id="pNum" />
                  </div>
                  <div>
                    <label>Plant Name</label>
                    <input type="text" name="pName" id="pName" />
                  </div>

                  <div class="form-action-buttons">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                  </div>
                </form>
                <td>
                  <table class="list" id="plantList">
                    <thead>
                      <tr>
                        <th>Plant #</th>
                        <th>Plant Name</th>
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
