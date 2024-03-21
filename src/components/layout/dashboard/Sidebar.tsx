import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ListItem, ListItemIcon, ListItemText, MenuList, useTheme } from '@mui/material';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    useLocation,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
    },[to, location.pathname])

    return (
        <ListItem button component={Link} to={to}  sx={{
            marginBottom: 2,
            borderRadius: '10px',
            padding: '5px 15px',
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
    ];

    return (
        <Paper 
            sx={{ 
                width: '240px', 
                display:'flex', 
                flexDirection:'column', 
                alignItems:'center', 
                flexShrink: 0,
                gap: '30px'
            }} 
            elevation={0} 
            component="aside"
        >
            <Box sx={{ width: '80px', height: '80px'}} bgcolor={theme.palette.primary.main} >
                
            </Box>
            <MenuList sx={{ width: '100%'}}>
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
            <Box 
                sx={{ 
                    width: '100%', 
                    height: '160px', 
                    borderRadius: '10px',
                    marginTop: 'auto'
                }} 
                bgcolor={theme.palette.background.default} >
            </Box>
        </Paper>
    )
}

export default Sidebar