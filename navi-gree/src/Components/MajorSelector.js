import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";

export default function MajorSelector({ selectedUniversity, onMajorSelect }) {
  const [major, setMajor] = useState("");

  const handleChange = (event) => {
    const selectedMajor = event.target.value;
    setMajor(selectedMajor);
    onMajorSelect(selectedMajor);
  };

  const majorData = [
    {
      university: "Wayne State University",
      majors: [
        "Biomedical engineering",
        "Chemical engineering",
        "Civil engineering",
        "Computer science",
        "Computer technology",
        "Construction management",
        "Electrical/electronic engineering technology",
        "Electrical and computer engineering",
        "Electromechanical engineering technology",
        "General engineering",
        "Industrial engineering",
        "Information technology",
        "Mechanical engineering",
        "Mechanical engineering technology",
        "Welding and metallurgical engineering technology",
      ],
    },
    {
      university: "MSU",
      majors: [
        "Computer Science",
        "Computational Data Science",
        "Cybersecurity",
        "Multimedia and Graphics",
        "Software Engineering",
        "Artificial Intelligence",
        "Theory",
        "Minor in Computer Science",
      ],
    },
    {
      university: "EMU",
      majors: [
        'Civil Engineering', 
        'Electrical and Computer Engineering',
        'Mechanical Engineering',
        'Computer and Electrical Engineering Technology',
        'Construction Management',
        'Mechanical Engineering Technology',
        'Product Design Engineering Technology'
      ]
    },
    {
      university: "UofM_D",
      majors: [
        'Software Engineering',
        'Data Science',
        'Computer and Information Science '
      ]
    },
    {
      university: "UofM_AA",
      majors: [
        'Aerospace Engineering',
        'Biomedical Engineering',
        'Chemical Engineering',
        'Civil & Environmental Engineering',
        'Climate and Space Sciences & Engineering',
        'Computer Science & Engineering',
        'Electrical & Computer EngineeringIndustrial & Operations Engineering',
        'Integrative Systems + Design',
        'Materials Science & Engineering',
        'Mechanical Engineering',
        'Naval Architecture & Marine Engineering',
        'Robotics'
      ]
    },
  ];

  return (
    <div className="z-44 w-44 bg-black text-white">
      <Box
        sx={{ minWidth: 120 }}
        className="text-white border-l border-r border-b border-gray-300"
      >
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ color: "white" }}
            shrink
          >
            Major
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={major}
            label="Select Major"
            onChange={handleChange}
            sx={{ color: "white", backgroundColor: "black" }}
          >
            {/* Default Option */}
            <MenuItem value="null">
              Select Major
            </MenuItem>

            {majorData.map(
              (majorDataItem, index) =>
                majorDataItem.university === selectedUniversity &&
                majorDataItem.majors.map((m, i) => (
                  <MenuItem key={i} value={m}>
                    {m}
                    {console.log(selectedUniversity)}
                  </MenuItem>
                ))
            )}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
