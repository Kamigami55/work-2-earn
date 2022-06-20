import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { format, getUnixTime } from 'date-fns'
import { useRecoilValue } from 'recoil'

import {
  currentTimeState,
  endTimeState,
  salaryPerDayState,
  startTimeState,
} from '../recoil/atoms'
import LinearProgressWithLabel from './LinearProgressWithLabel'

function clamp(input, min, max) {
  return input < min ? min : input > max ? max : input
}

function map(current, in_min, in_max, out_min, out_max) {
  const mapped =
    ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  return clamp(mapped, out_min, out_max)
}

function formatCurrency(number) {
  return number.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
  })
}

export default function Result() {
  const startTime = useRecoilValue(startTimeState)
  const endTime = useRecoilValue(endTimeState)
  const salaryPerDay = useRecoilValue(salaryPerDayState)
  const currentTime = useRecoilValue(currentTimeState)

  const passedPercentage = map(
    getUnixTime(currentTime),
    getUnixTime(startTime),
    getUnixTime(endTime),
    0,
    100
  )
  const earnedSalaryToday = map(passedPercentage, 0, 100, 0, salaryPerDay)

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <div>{format(startTime, 'HH:mm')}</div>
        <div>{format(endTime, 'HH:mm')}</div>
      </Box>
      <LinearProgressWithLabel value={passedPercentage} />
      <p>
        今天已經賺了 <b>{formatCurrency(earnedSalaryToday)}</b> /{' '}
        {formatCurrency(salaryPerDay)} 元
      </p>
    </div>
  )
}
