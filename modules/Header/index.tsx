import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '../../components/Logo'
import Menu from '../../components/Menu'
import { tw } from '../../lib/utils/tw'

const Header: React.FC = () => {
    const [menuActive, setMenuActive] = useState(false)
    const menu: { title: string }[] = [
        { title: 'Om' },
        { title: 'Blogg' },
        { title: 'Prosjekt' },
        { title: 'Kontakt' },
    ]

    const menuItems = () =>
        menu.map((item) => (
            <div
                key={item.title}
                className={tw('px-8', 'text-sm font-bold tracking-wide')}
            >
                <Link href="#">{item.title}</Link>
            </div>
        ))

    const handleMenuActive = () => setMenuActive(!menuActive)
    return (
        <div
            className={tw(
                'flex content-center items-center justify-between py-4 px-8',
                'bg-white',
                'border-solid border-2 border-white'
            )}
        >
            <Logo />
            <header className="absolute right-10 top-5">
                <Menu
                    onMenuActive={handleMenuActive}
                    menuActive={menuActive}
                    menu={menu}
                />
            </header>
        </div>
    )
}

export default Header
