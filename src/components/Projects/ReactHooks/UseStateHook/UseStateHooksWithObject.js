import React, { useState } from 'react';

const UseStateHooksWithObject = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
  };
  const [name, setName] = useState(initialValue);
  const setFirstName = e => {
    const value = e.target.value;
    setName({ ...name, firstName: value });
  };

  const setLastName = e => {
    const value = e.target.value;
    setName({ ...name, lastName: value });
  };

  const examples3 = `import React, { useState } from 'react';

  const UseStateHooksWithObject = () => {
    const initialValue = {
      firstName: '',
      lastName: '',
    };
    const [name, setName] = useState(initialValue);
    const setFirstName = e => {
      const value = e.target.value;
      setName({ ...name, firstName: value });
    };
  
    const setLastName = e => {
      const value = e.target.value;
      setName({ ...name, lastName: value });
    };
  
    return (
      <div className="usestate-hook2">
        <h2>useState Example with Object</h2>
        <div className="action">
          <div>
            <p>First Name: {name.firstName}</p>
            <p>Last Name: {name.lastName}</p>
          </div>
          <div className="button-group">
            <input type="text" value={name.firstName} onChange={setFirstName} />
            <input type="text" value={name.lastName} onChange={setLastName} />
          </div>
        </div>
      </div>
    );
  };
  
  export default UseStateHooksWithObject;
  `;

  return (
    <div className="usestate-hook2">
      <h2>useState Example with Object</h2>
      <pre>{examples3}</pre>
      <div className="action">
        <div>
          <p>
            First Name: <strong>{name.firstName}</strong>
          </p>
          <p>
            Last Name: <strong>{name.lastName}</strong>
          </p>
        </div>
        <div className="button-group">
          <input
            type="text"
            placeholder="Write First Name"
            value={name.firstName}
            onChange={setFirstName}
          />
          <input
            type="text"
            placeholder="Write Last Name"
            value={name.lastName}
            onChange={setLastName}
          />
        </div>
      </div>
    </div>
  );
};

export default UseStateHooksWithObject;
