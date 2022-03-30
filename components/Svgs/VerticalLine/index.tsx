import { motion, useViewportScroll } from 'framer-motion'
import React from 'react'
import useScrollPosition from '../../../lib/hooks/useScrollPosition'
interface IProps {
    height: number
    width: number
    x: number
    y: number
    fill?: string
    animate?: boolean
    scroll?: number
}
const VerticalLine: React.FC<IProps> = ({
    height = 50,
    width = 700,
    x = 40,
    y = 770,
    fill,
    animate,
    scroll,
}) => {
    const hasAnimate = typeof animate !== 'undefined'
    const hasScroll = typeof scroll !== 'undefined'

    const getAnimationHandler = () => {
        if (hasAnimate && hasScroll) {
            throw new Error('Kan ikke ha både animate og scroll-verdi')
        }
        if (hasAnimate) {
            return animate ? x + 50 : 50
        }
        if (hasScroll) {
            return scroll
        }
        return 0
    }
    return (
        <motion.svg
            fill="none"
            viewBox="5 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.g>
                <motion.rect
                    width={width && width}
                    height={height && height}
                    x={x && x}
                    y={y && y}
                    animate={{
                        x: getAnimationHandler(),
                    }}
                    transition={{
                        duration: 1,
                    }}
                    fill={fill ?? 'white'}
                />
            </motion.g>
        </motion.svg>
    )
}

export default VerticalLine
