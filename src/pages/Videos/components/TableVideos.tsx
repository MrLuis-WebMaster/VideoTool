import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined'; 
import { Box } from '@mui/material';


interface Data {
    id: number;
    name: string;
    size: number;
    duration: string;
    lastUpdated: string;
}

function createData(
    id: number,
    name: string,
    size: number,
    duration: string,
    lastUpdated: string,
): Data {
    return {
        id,
        name,
        size,
        duration,
        lastUpdated,
    };
}

const rows = [
    createData(1, 'video1.mp4', 305, '1:45:21', '30/may/2023'),
    createData(2, 'bemaster.mp4', 452, '1:45:21', '30/may/2023'),
    createData(3, 'BeMaster2.mp4', 262, '1:45:21', '30/may/2023'),
    createData(4, 'Exportados Will', 22, '1:45:21', '30/may/2023'),
    createData(5, 'Utilidades', 356, '1:45:21', '30/may/2023'),
    createData(6, 'Creador_de_Contenido.mp4', 2, '1:45:21', '30/may/2023'),
    createData(7, 'BeMaster2.mp4', 237, '1:45:21', '30/may/2023'),
    createData(8, 'Jelly-Bean.mp4', 375, '1:45:21', '30/may/2023'),
    createData(9, 'BeMaster.mp4', 518, '1:45:21', '30/may/2023'),
    createData(10, 'Creador de Contenido.mp4', 392, '1:45:21', '30/may/2023'),
];

interface HeadCell {
    id: string;
    label: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'size',
        label: 'Size',
    },
    {
        id: 'duration',
        label: 'Duration',
    },
    {
        id: 'lastUpdated',
        label: 'Last updated',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rowCount: number;
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { onSelectAllClick, numSelected, rowCount } =
        props;
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        size='small'
                        sx={{ color: 'rgba(0,0,0, .2)' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id}
                        {...{ align: headCell.id === 'name' ? 'left' : 'right' }}
                        sx={{ fontWeight: 'bold' }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const TableVideos = () => {
    const [selected, setSelected] = useState<readonly number[]>([]);


    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    return (
        <TableContainer>
            <Table
                size={'medium'}
            >
                <EnhancedTableHead
                    numSelected={selected.length}
                    onSelectAllClick={handleSelectAllClick}
                    rowCount={rows.length}
                />
                <TableBody>
                    {rows.map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow
                                hover
                                role="checkbox"
                                aria-checked={isItemSelected}
                                key={row.id}
                                selected={isItemSelected}
                                sx={{ cursor: 'pointer' }}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        onClick={(event) => handleClick(event, row.id)}
                                        color="primary"
                                        checked={isItemSelected}
                                        size='small'
                                        sx={{ color: 'rgba(0,0,0, .2)' }}
                                    />
                                </TableCell>
                                <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <PlayCircleFilledWhiteOutlinedIcon color='primary' />
                                        {row.name}
                                    </Box>
                                </TableCell>
                                <TableCell align="right">{row.size}</TableCell>
                                <TableCell align="right">{row.duration}</TableCell>
                                <TableCell align="right">{row.lastUpdated}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableVideos