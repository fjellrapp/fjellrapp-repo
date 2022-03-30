import { createContext, Dispatch, SetStateAction } from 'react'

export const ScreenLockContext = createContext<{
    lock: boolean
    setLock: Dispatch<SetStateAction<boolean>>
}>({
    lock: false,
    setLock: () => {},
})
