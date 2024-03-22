import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';


interface Data {
    id: number;
    name: string;
    videos: number;
    size: number;
    lastUpdated: string;
}

function createData(
    id: number,
    name: string,
    videos: number,
    size: number,
    lastUpdated: string,
): Data {
    return {
        id,
        name,
        videos,
        size,
        lastUpdated,
    };
}

const rows = [
    createData(1, 'Afiliado Master', 305, 3, '30/may/2023'),
    createData(2, 'BeMaster', 452, 25, '30/may/2023'),
    createData(3, 'BeMaster2', 262, 16, '30/may/2023'),
    createData(4, 'Exportados Will', 159, 6, '30/may/2023'),
    createData(5, 'Utilidades', 356, 16, '30/may/2023'),
    createData(6, 'Creador de Contenido', 408, 3, '30/may/2023'),
    createData(7, 'BeMaster2', 237, 9, '30/may/2023'),
    createData(8, 'Jelly Bean', 375, 8, '30/may/2023'),
    createData(9, 'BeMaster', 518, 26, '30/may/2023'),
    createData(10, 'Creador de Contenido', 392, 0.2, '30/may/2023'),
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
        id: 'videos',
        label: 'Videos',
    },
    {
        id: 'size',
        label: 'Size',
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

function EnhancedTableHead(props: EnhancedTableProps) {
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
                        {...{ align: headCell.id === 'name' ? 'left':  'right'}}
                        sx={{ fontWeight: 'bold'}}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const TableFolders = () => {
    const [selected, setSelected] = useState<readonly number[]>([]);
    const navigate = useNavigate()


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

    const handleNavigateFolder = (folder: string) => {
        navigate(`/videos/${folder}`)
    }

    return (
        <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
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
                                onClick={() => handleNavigateFolder(row.name)}
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
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                        <FolderOutlinedIcon color='primary'/>
                                        {row.name}
                                    </Box>
                                </TableCell>
                                <TableCell align="right">{row.videos}</TableCell>
                                <TableCell align="right">{row.size} GB</TableCell>
                                <TableCell align="right">{row.lastUpdated}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableFolders