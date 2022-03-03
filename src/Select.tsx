import * as React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function BasicSelect(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id={`${props.name}-label`}>{`${props.name}`}</InputLabel>
        <Select
          labelId={`${props.name}-label`}
          id={`${props.name}`}
          value={age}
          label={`${props.name}`}
          onChange={handleChange}
        >
          {props.values.map((v: any) => (
            <MenuItem value={v.title}>{v.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
