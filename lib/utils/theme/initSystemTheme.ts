import {
    getLocalStorage,
    setLocalStorage,
} from '@utils/localStorage/localStorage'

export const initSystemTheme = () => {
    if (getLocalStorage('theme') === null) {
        if (
            typeof window !== 'undefined' &&
            window?.matchMedia('(prefers-color-scheme: dark)').matches &&
            getLocalStorage('useSystemTheme') === 'true'
        ) {
            setLocalStorage('theme', 'dark')
        } else {
            setLocalStorage('theme', 'light')
        }
    }
}
