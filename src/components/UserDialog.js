import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

function UserDialog(props) {
    
    console.log(props.value);

  return (
    <Dialog open={props.open} onClose={props.onClose} style={{ width: "100%" }}>
        <DialogTitle>User Information</DialogTitle>
            <DialogContent style={{ 
                display: "flex",
                flexDirection: "column",
             }}>
                <TextField
                    id="outlined-controlled"
                    label="Name"
                    value={props.value.name}
                    // onChange={(event) => {
                    //   setName(event.target.value);
                    // }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Company"
                    value={props.value.company['name']}
                    // onChange={(event) => {
                    //   setName(event.target.value);
                    // }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Email"
                    value={props.value.email}
                    // onChange={(event) => {
                    //   setName(event.target.value);
                    // }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Phone"
                    value={props.value.phone}
                    // onChange={(event) => {
                    //   setName(event.target.value);
                    // }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Website"
                    value={props.value.website}
                    // onChange={(event) => {
                    //   setName(event.target.value);
                    // }}
                />
            </DialogContent>
    </Dialog>
  )
}

export default UserDialog