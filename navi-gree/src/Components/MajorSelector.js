import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';

export default function UniversitySelector({onMajorSelect}) {
  const [major, setMajor] = useState('');

  const handleChange = (event) => {
    const selectedMajor = event.target.value;
    setMajor(selectedMajor);
    onMajorSelect(selectedMajor);
  };

  const majorData = [
    {
      majorName: 'Wayne State University',
      code: 'Wayne State University',
    },
    {
      majorName: 'Michigan State University',
      code: 'MSU',
    },
    {
        majorName: 'Eastern Michigan University',
      code: 'EMU',
    },
    {
        majorName: 'University of Michigan - Dearborn',
      code: 'UofM_D',
    },
    {
        majorName: 'University of Michigan - Ann Arbor',
      code: 'UofM_AA',
    },
  ];

  return (
    <div className="z-44 w-44 bg-black text-white">
      <Box sx={{ minWidth: 120}} className="text-white">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }} shrink >
            Major
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={major}
            label="University Name"
            onChange={handleChange}
            sx={{ color: 'white', backgroundColor: 'black' }}
            >
            {majorData.map((major, index) => (
              <MenuItem key={index} value={major.code}>
                {major.majorName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
