import { ITrack } from '@models/lastfm'
import { tw } from '@utils/tw'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { ReactElement } from 'react'

interface IProps {
    track: ITrack
    link?: boolean
    afterIcon?: ReactElement | undefined
    beforeIcon?: ReactElement | undefined
}
export const NowPlaying: React.FC<IProps> = ({
    track,
    link = false,
    afterIcon,
    beforeIcon,
}) => {
    const [hovered, setHovered] = useState(false)
    const opacity: Variants = {
        withOpacity: { opacity: 0.6 },
        noOpacity: { opacity: 1 },
    }
    const nowPlaying = Boolean(track['@attr']?.nowplaying)

    const Track = () => (
        <>
            {nowPlaying && afterIcon && afterIcon}
            <div className="flex flex-col max-w-track">
                <span className={tw('text-sm font-semibold')}>
                    {track.artist['#text']}
                </span>
                <span className={tw('text-xs')}>{track.name}</span>
            </div>
            {nowPlaying && beforeIcon && beforeIcon}
        </>
    )

    return (
        <motion.div
            className={tw('flex flex-col opacity-70')}
            variants={opacity}
            animate={link && hovered ? 'withOpacity' : 'noOpacity'}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 1 }}
        >
            {link ? (
                <a
                    href={track.url}
                    target="_blank"
                    rel="noreferrer"
                    className={tw('flex flex-row items-center gap-5')}
                >
                    <Track />
                </a>
            ) : (
                <div className={tw('flex flex-row items-center gap-5')}>
                    <Track />
                </div>
            )}
        </motion.div>
    )
}
