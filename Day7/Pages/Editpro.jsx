import React, { useState } from 'react';

const Editpro = () => {
  const initialProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editable, setEditable] = useState(false);

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  const readOnlyStyle = {
    backgroundColor: '#f7f7f7',
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
    console.log('Updated Profile:', profile);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Edit Profile</h1>
      <form style={formStyle}>
        <label style={labelStyle} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={profile.name}
          readOnly={!editable}
          style={{ ...inputStyle, ...(editable ? {} : readOnlyStyle) }}
          onChange={handleInputChange}
        />
        <label style={labelStyle} htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={profile.email}
          readOnly={!editable}
          style={{ ...inputStyle, ...(editable ? {} : readOnlyStyle) }}
          onChange={handleInputChange}
        />
        <label style={labelStyle} htmlFor="bio">
          Bio:
        </label>
        <textarea
          id="bio"
          name="bio"
          rows="4"
          value={profile.bio}
          readOnly={!editable}
          style={{ ...inputStyle, ...(editable ? {} : readOnlyStyle) }}
          onChange={handleInputChange}
        />
        {editable ? (
          <button type="button" style={buttonStyle} onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button type="button" style={buttonStyle} onClick={handleEditClick}>
            Edit Profile
          </button>
        )}
      </form>
    </div>
  );
};

export default Editpro;
