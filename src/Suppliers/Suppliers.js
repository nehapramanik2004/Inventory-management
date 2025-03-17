import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
const columns = [
  {
    id: "SINO",
    label: "SINO",
    minWidth: 50,
  },
  { id: "Name", label: "Name", minWidth: 150 },
  { id: "EMAIL", label: "EMAIL", minWidth: 100 },
  {
    id: "MobileNumber",
    label: "MobileNumber",
    minWidth: 100,
  },
  {
    id: "Address",
    label: "Address",
    minWidth: 50,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "STATUS",
    label: "STATUS",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "ACTION",
    label: "ACTION",
    minWidth: 50,
    align: "right",
    format: (value) => value.toFixed(1),
  },
];

function createData(SINO, Name, EMAIL, MobileNumber, Address, STATUS, ACTION) {
  return { SINO, Name, EMAIL, MobileNumber, Address, STATUS, ACTION };
}

const rows = [
  createData(
    1,
    "Neha",
    "pramanikneha@gmail.com",
    7050360075,
    "Jamshedpur",
    "Active,Inactive",
    "View,edit,delete"
  ),
  createData(
    2,
    "Nikita",
    "Kumarinikita@gmail.com",
    9279291842,
    "Ranchi",
    "Active,Inactive",
    "View,edit,delete"
  ),
  createData(
    3,
    "Nandini",
    "knandini@gmail.com",
    9905414814,
    "Jamshedpur",
    "Active,Inactive",
    "View,edit,delete"
  ),
  createData(
    4,
    "Aditya",
    "pramanikadi@gmail.com",
    8709526069,
    "Jamshedpur",
    "Active,Inactive",
    "View,edit,delete"
  ),
  createData(
    5,
    "Bhumi",
    "bejbhumi12@gmail.com",
    87895256,
    "Jamshedpur",
    "Active,Inactive",
    "View,edit,delete"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}