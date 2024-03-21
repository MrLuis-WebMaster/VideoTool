import { Box, Button, InputAdornment, styled, TextField } from "@mui/material"
import TabComponent from "./components/Tabs"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TableFolders from "./components/TableFolders";

const PageVideo = () => {
  const TextFieldCustom = styled(TextField)({
    height: '45px',
    width: '45%',
    marginBottom: 32,
    ['& .MuiInputBase-root']: {
      height: '100%'
    },
    ['& .MuiInputAdornment-root']: {
      height: '100%',
      borderRight: '1px solid #c4c4c4',
      paddingRight: '8px',
      marginRight: '15px',
    },
  });
  return (
    <>
      <Box sx={{ display:'flex', alignItems: 'center', marginBottom: 8 }}>
        <TabComponent/>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Button variant="contained" color="secondary" startIcon={<FolderOutlinedIcon />}>
            New Folder
          </Button>
          <Button variant="contained" startIcon={<PlayCircleFilledWhiteOutlinedIcon/>}>
            New video
          </Button>
        </Box>
      </Box>
      <TextFieldCustom
        id="outlined-search" 
        label="" 
        type="search"
        placeholder="Search folder"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TableFolders />
    </>
  )
}

export default PageVideo