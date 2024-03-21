import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const LayoutVideoPage = () => {
  return (
      <Box sx={{ padding: '0 40px' }}>
        <Outlet/>
      </Box>
  )
}

export default LayoutVideoPage