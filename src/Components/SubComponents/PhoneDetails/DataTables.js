import React from 'react'
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



const DataTables = (props) => {
    return (
        <>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">

                <TableBody>
                    {props.data.specification.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <b>{row.name}</b>
                            </TableCell>
                            <TableCell align="left">{row.value}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>
    )
}

export default DataTables