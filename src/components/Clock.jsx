import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import { useRecoilValue } from 'recoil'

import { currentTimeState } from '../recoil/atoms'

function Clock() {
  const currentTime = useRecoilValue(currentTimeState)

  return (
    <Typography variant="h1" gutterBottom>
      {format(currentTime, 'HH:mm:ss')}
    </Typography>
  )
}

export default Clock
