import React from 'react';
import {Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const TableList = ({users, handleEdit}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align={'right'}>Lastname</TableCell>
            <TableCell align={'right'}>Country</TableCell>
            <TableCell align={'right'}>Hired</TableCell>
            <TableCell align={'right'}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user,idx) => (
            <TableRow
              key={user.id}
            >
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.lastname}</TableCell>
              <TableCell align="right">{user.country}</TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={user.hired}
                  color="success"
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleEdit(user)}
                  variant={'outlined'}
                  color={'success'}
                >
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;