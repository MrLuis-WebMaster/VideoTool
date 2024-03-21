import { useParams } from "react-router-dom"
import TableFolders from "../components/TableFolders"
import { Typography, Link, Breadcrumbs } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const PageVideosFolder = () => {
  const { folder } = useParams()
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/videos" component={RouterLink}>
          Videos
        </Link>
        <Typography color="text.primary">{folder}</Typography>
      </Breadcrumbs>
      <TableFolders />
    </>
  )
}

export default PageVideosFolder