import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { isDate, isValid } from 'date-fns'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

import {
  endTimeState,
  salaryPerDayState,
  startTimeState,
} from '../recoil/atoms'

function ConfigForm() {
  const [startTime, setStartTime] = useRecoilState(startTimeState)
  const [endTime, setEndTime] = useRecoilState(endTimeState)
  const [salaryPerDay, setSalaryPerDay] = useRecoilState(salaryPerDayState)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <SettingsIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>設定</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack py={2} spacing={3}>
              <TimePicker
                // ampmInClock
                views={['hours', 'minutes']}
                inputFormat="HH:mm"
                mask="__:__"
                label="上班時間"
                value={startTime}
                onChange={(newValue) => {
                  isDate(newValue) &&
                    isValid(newValue) &&
                    setStartTime(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                ampmInClock
                views={['hours', 'minutes']}
                inputFormat="HH:mm"
                mask="__:__"
                label="下班時間"
                value={endTime}
                onChange={(newValue) => {
                  isDate(newValue) && isValid(newValue) && setEndTime(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <TextField
                label="每日薪水"
                variant="outlined"
                fullWidth
                value={salaryPerDay}
                onChange={(event) => setSalaryPerDay(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Stack>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>完成</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfigForm
