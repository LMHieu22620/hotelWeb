import React, { useState } from "react";

import DatePicker from "react-dater";

import "react-dater/dist/index.css";
import Grid from "./Grid";
// import LocalizationProvider from "@mui/material";
// import StaticDateRangePicker from "@mui/material";
// import TextField from "@mui/material";
// import AdapterDateFns from "@mui/material";
// import Box from "@mui/styled-engine-sc";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Button from "./Button";

const Checkinout = () => {
  const [value, setValue] = useState([null, null]);
  const [number, setNumber] = useState(1);
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="checkinout">
      <Grid col={4} mdCol={2} smCol={1} gap={100}>
        <div className="checkinout__in">
          <span className="checkinout__in__title">Check-in</span>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              value={value}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="checkinout__out">
          <span className="checkinout__out__title">Check-out</span>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              endText="Check-out"
              inputFormat="dd/MM/yyyy"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="checkinout__out">
          <div className="checkinout__out__title">Khách</div>
          <TextField
            id="outlined-number"
            // label="Number"
            type="number"
            value={number}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleNumber}
          />
        </div>
        <div className="checkinout__btn">
          <Button>Tìm</Button>
        </div>
      </Grid>
    </div>
  );
};

export default Checkinout;
