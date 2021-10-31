
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
const data = [
  {
    "id": 1,
    "gardenName": "Jenny Chan",
    "buildingNumber": "3 waterfoot road"
  },
  {
    "id": 2,
    "gardenName": "Jessica warren",
    "buildingNumber": "4 tall town",
   
  },
  {
    "id": 3,
    "gardenName": "Tony Frank",
    "buildingNumber": "11 lesly road",
    
  },
  {
    "id": 4,
    "gardenName": "Jeremy Clark",
    "buildingNumber": "333 miltown manor",
    
  },
  {
    "id": 5,
    "gardenName": "Raymond Edwards",
    "buildingNumber": "99 blue acres",
    
  }
]


export default function CrudGarden() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    gardenName: "",
    buildingNumber: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    gardenName: "",
    buildingNumber: "",
   
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
      gardenName: addFormData.gardenName,
      buildingNumber: addFormData.buildingNumber,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      gardenName: editFormData.gardenName,
      buildingNumber: editFormData.buildingNumber,
      
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
      gardenName: contact.gardenName,
      buildingNumber: contact.buildingNumber,
     
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
              <th>Name</th>
              <th>Building Number</th>
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

      <h2>Add a Garden</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="gardenName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="buildingNumber"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
      <div className="links">{
        <>
        <a href="/manager_plant">Manage Plants</a><br/>
        <a href="/manager_pool">Manage Pool</a><br/>
        <a href="/manager_incident">Manage Incident</a>
        </>
        
      }

      </div>
    </div>
  );
};
