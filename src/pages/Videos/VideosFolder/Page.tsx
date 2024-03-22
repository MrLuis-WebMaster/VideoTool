import { useParams } from "react-router-dom"
import { Typography, Link, Breadcrumbs, Button, Box } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import TableVideos from "../components/TableVideos"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PageVideosFolder = () => {
  const { folder } = useParams()
  return (
    <>
      <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem'}}>
        <Button 
          component={RouterLink}
          to="/videos"
          size="large" color="primary" variant="contained" 
          sx={{ height: '2.7rem', width: '2.7rem', padding: '1rem', minWidth: 'auto'}}
        >
          <ArrowBackIcon />
        </Button>
        <Breadcrumbs aria-label="breadcrumb" separator={'/'} sx={{ fontSize: '1.3rem' }}>
          <Link underline="hover" color="black" to="/videos" component={RouterLink}>
            Videos
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>{folder}</Typography>
        </Breadcrumbs>
      </Box>
      <TableVideos />
    </>
  )
}

export default PageVideosFolder