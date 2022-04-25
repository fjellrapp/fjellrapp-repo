import { useEffect, useState } from 'react'

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const setFromEvent = (e: any) => setPosition({ x: e.pageX, y: e.pageY })
        window.addEventListener('mousemove', setFromEvent, false)
        window.addEventListener('mouseenter', setFromEvent, false)

        return () => {
            window.removeEventListener('mousemove', setFromEvent)
            window.removeEventListener('mouseEnter', setFromEvent)
        }
    }, [])

    return position
}
