import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { currentTimeState } from '../recoil/atoms'

const useSyncCurrentDate = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useRecoilState(currentTimeState)

  function refreshClock() {
    setDate(new Date())
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])
}
export default useSyncCurrentDate
