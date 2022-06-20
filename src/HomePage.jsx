import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

import Clock from './components/Clock'
import ConfigForm from './components/ConfigForm'
import Result from './components/Result'
import useSyncCurrentDate from './hooks/useSyncCurrentDate'

function HomePage() {
  useSyncCurrentDate()

  return (
    <Box textAlign="center">
      <Typography variant="h3">💰上班發大財💰</Typography>
      <Clock />
      <Result />
      <ConfigForm />
    </Box>
  )
}

export default HomePage
