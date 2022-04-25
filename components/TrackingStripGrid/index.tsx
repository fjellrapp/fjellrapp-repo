import { tw } from '@utils/tw'
import { motion, Variants } from 'framer-motion'
import React from 'react'
import { ReactElement } from 'react'

interface IProps {
    elements: number
    pointerX: number
    pointerY: number
}
const TrackingLineGrid: React.FC<IProps> = ({
    elements,
    pointerX,
    pointerY,
}) => {
    const getCenter = (index: number) => {
        if (typeof document === 'undefined') return
        const elements = document?.querySelectorAll('.animatedDiv')
        const elementDeg = elements.item(index)
        const elementRect = elementDeg.getBoundingClientRect()
        const degsY = elementRect.top + elementRect.height
        const degsX = elementRect.left + elementRect.width

        const degs =
            Math.atan2(pointerX + degsX, -(pointerY - degsY)) * (180 / Math.PI)
        return `${degs}deg`
    }
    const Elements: ReactElement[] = Array(elements).fill([
        React.createElement('span'),
    ])
    const XRow = () => (
        <motion.div className={tw(`flex h-56 w-56 flex-wrap`)}>
            {Elements.map((_, i) => (
                <motion.div
                    className={tw(
                        `flex m-4 w-10 h-1 bg-black hover:bg-white animatedDiv`
                    )}
                    animate={{
                        rotate: getCenter(i),
                    }}
                    initial={{
                        rotate: getCenter(i),
                    }}
                    id={`dot-${i}`}
                    key={i}
                />
            ))}
        </motion.div>
    )

    return (
        <div className="absolute z-0 flex flex-col self-start w-fit">
            <XRow />
        </div>
    )
}
export default TrackingLineGrid
