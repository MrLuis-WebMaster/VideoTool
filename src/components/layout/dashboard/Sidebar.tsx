import React, { useEffect, useState } from 'react';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    useLocation,
} from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ListItem, ListItemIcon, ListItemText, MenuList, useTheme } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import Plan from './Plan';

interface ListItemLinkProps {
    icon: React.ReactElement;
    title: string;
    to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
    function Link(itemProps, ref) {
        return <RouterLink ref={ref} {...itemProps} role={undefined} />;
    },
);

function ListItemLink(props: ListItemLinkProps) {
    const { icon, title, to } = props;
    const location = useLocation();
    const [active, setActive] = useState<boolean | null>(null);
    const theme = useTheme();

    useEffect(() => {
        setActive(location.pathname.startsWith(to))
    }, [to, location.pathname])


    return (
        <ListItem button component={Link} to={to} sx={{
            marginBottom: 2,
            borderRadius: '0.625rem',
            padding: '0.313rem 0.938rem',
            gap: 2,
            background: active ? theme.palette.primary.main : '',
            color: active ? theme.palette.primary.contrastText : '',
            '&:hover': {
                background: active ? theme.palette.primary.main : '',
            }
        }}>
            <ListItemIcon sx={{ minWidth: 'auto', color: active ? theme.palette.primary.contrastText : '#252525' }}>{icon}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
}



const Sidebar = () => {

    const theme = useTheme()

    const items = [
        { name: 'Dashboard', path: '/dashboard', icon: <DashboardOutlinedIcon fontSize="small" /> },
        { name: 'Videos', path: '/videos', icon: <FolderOutlinedIcon fontSize="small" /> },
        { name: 'Player', path: '/player', icon: <PlayCircleFilledWhiteOutlinedIcon fontSize="small" /> },
        { name: 'Analytics', path: '/analytics', icon: <InsertChartOutlinedSharpIcon fontSize="small" /> },
        { name: 'Configurations', path: '/configurations', icon: <SettingsOutlinedIcon fontSize="small" /> },
        { name: 'Help', path: '/help', icon: <HelpOutlineOutlinedIcon fontSize="small" /> },
    ];


    return (
        <Paper
            sx={{
                width: '17rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
                gap: '1.875rem',
                paddingTop: '3.75rem',
            }}
            elevation={0}
            component="aside"
        >
            <Box 
                sx={{
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff'
                }} 
                bgcolor={theme.palette.primary.main} 
            >
                <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: '5.5rem' }} />
            </Box>
            <MenuList sx={{ width: '100%' }}>
                {items.map((item, index) => {
                    return (
                        <ListItemLink
                            key={index}
                            to={item.path}
                            icon={item.icon}
                            title={item.name}
                        />
                    )
                })}
            </MenuList>
            <Plan />
        </Paper>
    )
}

export default Sidebar