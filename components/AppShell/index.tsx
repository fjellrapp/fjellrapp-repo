import { useState } from 'react'
import { ScreenLockContext } from '../../lib/context/screenlock'
import Header from '../../modules/Header'
import Main from '../Main'
import Meta from '../Meta'

interface IProps {
    customFooter?: React.FC
}
const AppShell: React.FC<IProps> = ({ customFooter, children }) => {
    const [lock, setLock] = useState(false)

    const contextValue = { lock, setLock }
    return (
        <>
            <ScreenLockContext.Provider value={{ ...contextValue }}>
                <Meta />
                <Header />
                <Main>{children}</Main>
                {customFooter ?? <footer></footer>}
            </ScreenLockContext.Provider>
        </>
    )
}
export default AppShell
