import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';

export default function UniversitySelector({onUniversitySelect}) {
  const [university, setUniversity] = useState('');

  const handleChange = (event) => {
    const selectedUniversity = event.target.value;
    setUniversity(selectedUniversity);
    onUniversitySelect(selectedUniversity);
  };

  const uniData = [
    {
      university: 'Wayne State University',
      code: 'Wayne State University',
    },
    {
      university: 'Michigan State University',
      code: 'MSU',
    },
    {
      university: 'Eastern Michigan University',
      code: 'EMU',
    },
    {
      university: 'University of Michigan - Dearborn',
      code: 'UofM_D',
    },
    {
      university: 'University of Michigan - Ann Arbor',
      code: 'UofM_AA',
    },
  ];

  return (
    <div className="z-44 w-44 bg-black text-white mr-5">
      <Box sx={{ minWidth: 120}} className="text-white border-l border-r border-b border-gray-300">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }} shrink >
            University Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={university}
            label="University Name"
            onChange={handleChange}
            sx={{ color: 'white', backgroundColor: 'black' }}
            >
            {uniData.map((uni, index) => (
              <MenuItem key={index} value={uni.code}>
                {uni.university}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
