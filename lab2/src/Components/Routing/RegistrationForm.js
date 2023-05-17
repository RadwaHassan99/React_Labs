import React, { useState } from 'react';

const RegistrationForm = ({ handleRegistration }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id, name, age };
    handleRegistration(newUser);
    setId('');
    setName('');
    setAge('');
  };

  return (
    <div className="card register">
      <div className="card-header">Registration Form</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="Enter ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="form-group">
           
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
       
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
