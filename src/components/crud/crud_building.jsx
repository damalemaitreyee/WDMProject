
import "./crud_building.css";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowBuilding";
import EditableRow from "./EditableRowBuilding";
const data = [
  {
    "id": 1,
    "buildingName": "Jenny Chan",
    "address": "3 waterfoot road"
  },
  {
    "id": 2,
    "buildingName": "Jessica warren",
    "address": "4 tall town"
    
  },
  {
    "id": 3,
    "buildingName": "Tony Frank",
    "address": "11 lesly road"
    
  },
  {
    "id": 4,
    "buildingName": "Jeremy Clark",
    "address": "333 miltown manor"
  },
  {
    "id": 5,
    "buildingName": "Raymond Edwards",
    "address": "99 blue acres"
  }
]


export default function CrudBuilding() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    buildingName: "",
    address: ""
    
  });

  const [editFormData, setEditFormData] = useState({
    buildingName: "",
    address: ""
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
      buildingName: addFormData.buildingName,
      address: addFormData.address,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      buildingName: editFormData.buildingName,
      address: editFormData.address
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
      buildingName: contact.buildingName,
      address: contact.address
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
      <form onSubmit={handleEditFormSubmit} className="crud">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
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

      <h2>Add a Building</h2>
      <form onSubmit={handleAddFormSubmit} className="crud">
        <input
          type="text"
          name="buildingName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
