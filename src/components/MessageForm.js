import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import Navbar from "./Navbar";

const MessageForm = () => {
  const [areaName, setAreaName] = useState("");
  const [trashCanNumber, setTrashCanNumber] = useState("");
  const [unpleasantOdor, setUnpleasantOdor] = useState("Yes");
  const [reason, setReason] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Urgent Garbage Clearence Alert! Area Name: ${areaName}, Trash Can Number: ${trashCanNumber}, Unpleasant Odor: ${unpleasantOdor}, Reason:${reason}`;

    axios
      .post("https://smartwaste-sahul.onrender.com/sendSMS", { message })
      .then(() => {
        alert("SMS sent successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("SMS failed to send.");
      });
  };

  return (
    <div>
      <Navbar/>
      <Container
        sx={{
          backgroundColor: "white",
          marginTop: "80px",
          padding: "20px",
          borderRadius: "20px",
        }}
        component="main"
        maxWidth="xs"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Area Name"
            value={areaName}
            onChange={(event) => setAreaName(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Trash Can Number"
            type="text"
            value={trashCanNumber}
            onChange={(event) => setTrashCanNumber(Number(event.target.value))}
            margin="normal"
            required
            variant="outlined"
            fullWidth
          />
          <FormControl margin="normal" fullWidth>
            <InputLabel>Unpleasant Odour</InputLabel>
            <Select
              value={unpleasantOdor}
              onChange={(event) => setUnpleasantOdor(event.target.value)}
              variant="standard"
              required
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            Send SMS
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default MessageForm;
