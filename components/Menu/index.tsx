import { motion, Variants } from 'framer-motion'
import gsap from 'gsap'
import { ExpoScaleEase } from 'gsap/EasePack'
import { useEffect, useRef, useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { colors } from '../../styles/colors'
import { tw } from '../../lib/utils/tw'
import useLockedBody from '../../lib/hooks/useLockedBody'
import { useMousePosition } from '../../lib/hooks/useMousePosition'
interface IProps {
    onMenuActive: () => void
    menuActive: boolean
    menu: { title: string }[]
}
const Menu: React.FC<IProps> = ({ onMenuActive, menuActive, menu }) => {
    const [toggleVariantOpen, setToggleVariantOpen] = useState(true)
    const [_, setLocked] = useLockedBody(false)
    const mouse = useMousePosition()

    const handleIconClick = () => {
        onMenuActive()
        setToggleVariantOpen(!toggleVariantOpen)
    }

    const iconVariants: Variants = {
        rotateOpen: { rotate: [205, -25, 0] },
        rotateClose: { rotate: [0, 250, 225] },
    }
    const navVariants: Variants = {
        slideIn: { opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 1] },
        slideOut: {
            opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        },
    }
    const navLinkVariants: Variants = {
        slideIn: { x: -100 },
        slideOut: { x: 0 },
    }

    useEffect(() => {
        menuActive ? setLocked(true) : setLocked(false)
    }, [menuActive, setLocked])

    useEffect(() => {}, [mouse])

    return (
        <>
            <div
                className={tw(
                    'flex items-center justify-center',
                    'w-10 h-10',
                    'transition-colors rounded-none',
                    'text-black hover:text-black ',
                    'z-[100]',
                    menuActive && 'fixed right-10 text-black hover:text-black'
                )}
                tabIndex={1}
            >
                <motion.button
                    onClick={handleIconClick}
                    variants={iconVariants}
                    animate={toggleVariantOpen ? 'rotateOpen' : 'rotateClose'}
                    transition={{ duration: 0.5 }}
                >
                    <HiOutlinePlus size={30} />
                </motion.button>
            </div>
            <motion.nav
                className={tw(
                    menuActive
                        ? 'flex fixed h-full w-full left-0 top-0 bg-offWhite z-[99] '
                        : 'hidden -left-[-600px]',
                    'items-center justify-end pr-1 md:pr-10 lg:pr-20 '
                )}
                variants={navVariants}
                animate={!toggleVariantOpen ? 'slideIn' : 'slideOut'}
                transition={{ duration: 0.2 }}
            >
                <div className="flex flex-col items-start">
                    {menu?.length &&
                        menu.map((item, index) => (
                            <motion.div
                                className={tw(
                                    'p-5 text-4xl font-bold tracking-widest text-black',
                                    'relative',
                                    `left-[${(index + 1) * 400}px]`
                                )}
                                variants={navLinkVariants}
                                animate="slideIn"
                                key={`${item}-${index}`}
                            >
                                <motion.a href="#">{item.title}</motion.a>
                            </motion.div>
                        ))}
                </div>
            </motion.nav>
        </>
    )
}
export default Menu
