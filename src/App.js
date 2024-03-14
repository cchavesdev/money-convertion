import React, { useState } from 'react';
import { TextField } from '@mui/material';

const App = () => {
  const colonesDollarValue = 500;
  const cordovasDollarValue = 36;
  const [values, setValues] = useState({
    cordovas: '',
    dollars: '',
    colones: '',
  });

  const handleInputChange = (name, value) => {
    let newValues = { ...values, [name]: value };

    if (name === 'cordovas') {
      const dollars = parseFloat(value) / 36 || 0;
      const colones = dollars * colonesDollarValue;
      newValues = { ...newValues, dollars: dollars.toFixed(2), colones: colones.toFixed(2) };
    } else if (name === 'dollars') {
      const cordovas = parseFloat(value) * 36 || 0;
      const colones = parseFloat(value) * colonesDollarValue || 0;
      newValues = { ...newValues, cordovas: cordovas.toFixed(2), colones: colones.toFixed(2) };
    } else if (name === 'colones') {
      const dollars = parseFloat(value) / colonesDollarValue || 0;
      const cordovas = dollars * 36;
      newValues = { ...newValues, dollars: dollars.toFixed(2), cordovas: cordovas.toFixed(2) };
    }

    setValues(newValues);
  };

  return (
    <div className='fields-container'>
      <TextField
        label="Cordovas"
        variant="outlined"
        value={values.cordovas}
        onChange={(e) => handleInputChange('cordovas', e.target.value)}
        onFocus={()=>{setValues({
          cordovas: '',
          dollars: '',
          colones: '',
        })}}
        type="number"
      />
      <TextField
        label="Dollars"
        variant="outlined"
        value={values.dollars}
        onChange={(e) => handleInputChange('dollars', e.target.value)}
        onFocus={()=>{setValues({
          cordovas: '',
          dollars: '',
          colones: '',
        })}}
        type="number"
      />
      <TextField
        label="Colones"
        variant="outlined"
        value={values.colones}
        onChange={(e) => handleInputChange('colones', e.target.value)}
        onFocus={()=>{setValues({
          cordovas: '',
          dollars: '',
          colones: '',
        })}}
        type="number"
      />
    </div>
  );
};

export default App;
