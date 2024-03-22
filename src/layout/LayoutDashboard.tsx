
import Box from '@mui/material/Box';
import Sidebar from '../components/layout/dashboard/Sidebar';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

const LayoutDashboard = () => {
  return (
    <Box sx={{ padding: 3, height: '100vh', display: 'flex', gap: 2, overflow:'hidden' }}>
        <Sidebar />
        <Paper sx={{ flexGrow: 1, overflowY: 'auto'}} elevation={0} component="main">
          <Outlet/>
        </Paper>
    </Box>
  )
}

export default LayoutDashboard