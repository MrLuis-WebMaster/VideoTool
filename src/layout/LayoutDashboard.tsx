
import Box from '@mui/material/Box';
import Sidebar from '../components/layout/dashboard/Sidebar';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

const LayoutDashboard = () => {
  return (
    <Box sx={{ padding: 3, minHeight: '100vh', display: 'flex', gap: 2 }}>
        <Sidebar/>
        <Paper sx={{ flexGrow: 1}} elevation={0} component="main">
          <Outlet/>
        </Paper>
    </Box>
  )
}

export default LayoutDashboard