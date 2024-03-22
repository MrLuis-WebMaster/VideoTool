import { Box, Typography, Button, alpha, LinearProgress, linearProgressClasses, styled } from '@mui/material'
import theme from '../../../styles/theme'

const Plan = () => {

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
                  display: 'block', fontStyle: 'italic', fontSize: ".80rem", margin: ".25rem 0 1rem 0"
              }}>
              El uso se renueva el: 3-may-23
          </Typography>
          <Box sx={{ marginBottom: "1rem" }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: ".25rem" }}>
                  <Typography component="span" sx={{ fontSize: "1rem" }} >
                      Storage
                  </Typography>
                  <Typography component="span" sx={{ fontSize: ".85rem" }} >
                      235GB / 1TB
                  </Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={70} />
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: ".25rem" }}>
                  <Typography component="span" sx={{ fontSize: "1rem" }} >
                      Monthly
                  </Typography>
                  <Typography component="span" sx={{ fontSize: ".85rem" }} >
                      25GB / 1TB
                  </Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={50} />
          </Box>
          <Button variant="contained" sx={{ borderRadius: '10rem', padding: '.65rem 1rem', height: '2rem' }}>
              Administrar plan
          </Button>
      </Box>
  )
}

export default Plan