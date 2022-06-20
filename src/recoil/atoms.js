import { setHours, startOfHour } from 'date-fns'
import { atom } from 'recoil'

export const startTimeState = atom({
  key: 'startTimeState',
  default: startOfHour(setHours(new Date(), 9)),
})

export const endTimeState = atom({
  key: 'endTimeState',
  default: startOfHour(setHours(new Date(), 18)),
})

export const salaryPerDayState = atom({
  key: 'salaryPerDayState',
  default: 1000,
})

export const currentTimeState = atom({
  key: 'currentTimeState',
  default: new Date(),
})
