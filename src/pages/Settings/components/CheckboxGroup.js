import React from "react";
import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const CheckboxGroup = ({ title, items }) => {
  return (
    <React.Fragment>
      <Typography variant="subtitle1">{title}}</Typography>
      <FormGroup>
        {items.map(({ label, checked }) => (
          <FormControlLabel
            label={label}
            checked={checked}
            control={<Checkbox color="primary" />}
          />
        ))}
      </FormGroup>
    </React.Fragment>
  );
};

export default CheckboxGroup;
