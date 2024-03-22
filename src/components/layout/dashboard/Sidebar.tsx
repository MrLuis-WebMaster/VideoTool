import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha, Button, IconButton, LinearProgress, linearProgressClasses, ListItem, ListItemIcon, ListItemText, MenuList, styled, Typography, useTheme } from '@mui/material';
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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
    ];

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 8,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.main,
        },
    }));

    return (
        <Paper
            sx={{
                width: '16.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
                gap: '1.875rem',
                paddingTop: '3.75rem',
                position: 'relative'
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
            <Box
                sx={{
                    width: '100%',
                    borderRadius: '0.625rem',
                    marginTop: 'auto',
                    padding: '1.25rem 0.938rem'
                }}
                bgcolor={theme.palette.background.default} >
                <Typography variant="h5" sx={{ fontWeight: '600', fontSize: "1.2rem" }}>
                    Mi Plan - Plus
                </Typography>
                <Typography 
                    component="span" 
                    sx={{ 
                        display: 'block', fontStyle: 'italic', fontSize: ".80rem", margin: ".25rem 0 .55rem 0" 
                    }}>
                    El uso se renueva el: 3-may-23
                </Typography>
                <Box sx={{ marginBottom: "1rem" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', marginBottom: ".25rem" }}>
                        <Typography component="span" sx={{ fontSize: "1rem"}} >
                            Storage
                        </Typography>
                        <Typography component="span" sx={{ fontSize: ".85rem"}} >
                             235GB / 1TB
                        </Typography>
                    </Box>
                    <BorderLinearProgress variant="determinate" value={70} />
                </Box>
                <Box sx={{ marginBottom: "1rem" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', marginBottom: ".25rem" }}>
                        <Typography component="span" sx={{ fontSize: "1rem"}} >
                            Storage
                        </Typography>
                        <Typography component="span" sx={{ fontSize: ".85rem"}} >
                             235GB / 1TB
                        </Typography>
                    </Box>
                    <BorderLinearProgress variant="determinate" value={70} />
                </Box>
                <Button variant="contained" sx={{ borderRadius: '10rem', padding: '.65rem 1rem', height: '2rem'}}>
                    Administrar plan
                </Button>
            </Box>
            <Box sx={{ position: 'absolute', top: '1.5rem', right: '.5rem' }}>
                <IconButton>
                    <ArrowBackIosIcon/>
                </IconButton>
            </Box>
        </Paper>
    )
}

export default Sidebar