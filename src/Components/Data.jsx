import React from 'react';
import MainData from './MainData';

function Data() {
  const maindata = new MainData(
    'Emmanuel',
    'Amarikwa',
    'amarikwa',
    'pass',
    '1234 Lagos, Nigeria'
  );

  // Optional API request format
  const jsonData = maindata.toJSON();

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Data Preview</h2>
      <p><strong>Full Name:</strong> {maindata.getFullName()}</p>
      <p><strong>Email:</strong> {maindata.email}</p>
      <p><strong>Valid Email:</strong> {maindata.isEmailValid() ? 'Yes' : 'No'}</p>
      <p><strong>Address:</strong> {maindata.address}</p>
      <p><strong>Password Masked:</strong> {maindata.hidePassword()}</p>
      <p><strong>Strong Password:</strong> {maindata.isStrongPassword() ? 'Yes' : 'No'}</p>

      <h4>API Ready Format:</h4>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
}

export default Data;
