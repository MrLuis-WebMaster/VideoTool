import React, { useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { LibraryBooks } from '@mui/icons-material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styled from '@emotion/styled';


const TabComponent = () => {
    const [value, setValue] = useState('one');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const TabCustom = styled(Tab)({
        minHeight: 'auto',
        padding: 0,
        fontSize: 16,
        textTransform: 'capitalize',
        justifyContent: 'start',
        gap: 8,
        ['& .MuiSvgIcon-root']: {
            marginRight: 0,
            fontSize: '1.3rem'
        }
    });

    const TabsCustoms = styled(Tabs)({
        minHeight: '1.875rem',
        "& .MuiTabs-indicator" : {
            height: '0.25'
        },
        "& .MuiTabs-flexContainer" : {
            gap: 20
        }
    });

    return (
        <Box sx={{ width: '100%' }}>
            <TabsCustoms
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
            >
                <TabCustom value="one" icon={<LibraryBooks />} iconPosition="start" label="Library" />
                <TabCustom value="two" icon={<DeleteOutlinedIcon />} iconPosition="start" label="Trash" />
            </TabsCustoms>
        </Box>
    );
}

export default TabComponent;