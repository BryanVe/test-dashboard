import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";

const CustomOutlinedInput = ({
  required = false,
  htmlFor,
  label,
  onChange = null,
}) => {
  return (
    <FormControl variant="outlined" style={{ width: "100%", margin: "5px" }}>
      <InputLabel htmlFor={`outlinedInput-${htmlFor}}`}>{`${label} ${
        required ? " *" : ""
      }`}</InputLabel>
      <OutlinedInput
        fullWidth
        onChange={(e) => onChange(e.target.value, `${htmlFor}`)}
        id={`outlinedInput-${htmlFor}`}
        label={`${label} ${required ? " *" : ""}`}
      />
      {required ? (
        <FormHelperText>
          Please specify the {label.toLowerCase()}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default CustomOutlinedInput;
