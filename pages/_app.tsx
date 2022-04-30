import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
    getLocalStorage,
    setLocalStorage,
} from '@utils/localStorage/localStorage'
import { checkAndInitTheme } from '@utils/theme/checkAndInitTheme'
import { initSystemTheme } from '@utils/theme/initSystemTheme'
import { inLocalStorage } from '@utils/localStorage/inLocalStorage'

function MyApp({ Component, pageProps }: AppProps) {
    if (inLocalStorage('useSystemTheme')) {
        initSystemTheme()
    } else {
        setLocalStorage('useSystemTheme', 'true')
    }
    checkAndInitTheme()

    return <Component {...pageProps} />
}

export default MyApp
