import { getLocalStorage } from '@utils/localStorage/localStorage'

export const checkAndInitTheme = () => {
    if (typeof document === 'undefined') return
    if (
        getLocalStorage('useSystemTheme') === 'true' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
}
