
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowPlant";
import EditableRow from "./EditableRowPlant";
const data = [
  {
    "id": 1,
    "plantName": "Jenny Chan",
    "buildingName": "3 waterfoot road",
    "gardenNumber": "333-962-7516",
    
  },
  {
    "id": 2,
    "plantName": "Jessica warren",
    "buildingName": "4 tall town",
    "gardenNumber": "011-211-7516",
    
  },
  {
    "id": 3,
    "plantName": "Tony Frank",
    "buildingName": "11 lesly road",
    "gardenNumber": "788-962-7516",
    
  },
  {
    "id": 4,
    "plantName": "Jeremy Clark",
    "buildingName": "333 miltown manor",
    "gardenNumber": "011-962-111",
    
  },
  {
    "id": 5,
    "plantName": "Raymond Edwards",
    "buildingName": "99 blue acres",
    "gardenNumber": "3231-962-7516",
    
  }
]


export default function CrudPlant() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    plantName: "",
    buildingName: "",
    gardenNumber: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    plantName: "",
    buildingName: "",
    gardenNumber: "",
    
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      plantName: addFormData.plantName,
      buildingName: addFormData.buildingName,
      gardenNumber: addFormData.gardenNumber,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      plantName: editFormData.plantName,
      buildingName: editFormData.buildingName,
      gardenNumber: editFormData.gardenNumber,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      plantName: contact.plantName,
      buildingName: contact.buildingName,
      gardenNumber: contact.gardenNumber,
     
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Plant Name</th>
              <th>Building Name</th>
              <th>Garden Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Plant</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="plantName"
          required="required"
          placeholder="Enter a plant..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="buildingName"
          required="required"
          placeholder="Enter an building name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="gardenNumber"
          required="required"
          placeholder="Enter a Garden number..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
      <div>
      <a href="/manager_incident">Manage Incident</a><br/>
        <a href="/manager_pool">Manage Pool</a><br/>
        <a href="/manager_garden">Manage Garden</a>
      </div>
    </div>
  );
};
