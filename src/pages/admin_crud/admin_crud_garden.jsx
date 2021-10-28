import React from "react"; 
import "../crud.css"

export default function Admin_crud_garden() {
  return (
    <div>
      <h1 class="title">Hello!</h1>
      <h3 class="title1">Register/Manage a Lunamar Garden</h3>
      <div class="container">
        <table>
          <tr>
            <td>
              <form
                onsubmit="event.preventDefault();onFormSubmit();"
                autocomplete="off"
              >
                <div>
                  <label>Garden #</label>
                  <label class="validation-error hide" id="gNumValidationError">
                    This field is required.
                  </label>
                  <input type="number" name="gNum" id="gNum" />
                </div>
                <div>
                  <label>Garden Name</label>
                  <input type="text" name="gName" id="gName" />
                </div>
                <div>
                  <label>Any Incident(N/A if none)</label>
                  <input type="text" name="gIncident" id="gIncident" />
                </div>

                <div class="form-action-buttons">
                  <input type="submit" value="Submit" />
                  <input type="reset" value="Reset" />
                </div>
              </form>
              <td>
                <table class="list" id="gardenList">
                  <thead>
                    <tr>
                      <th>Garden #</th>
                      <th>Garden Name</th>
                      <th>Incident</th>
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
  );
}
