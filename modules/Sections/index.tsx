import { IRecentTracks } from '@models/lastfm'
import { IntroTop } from './SectionsIndex/IntroTop'
import { tw } from '@utils/tw'
import { useMousePosition } from '@hooks/useMousePosition'
import TrackingLineGrid from '@components/TrackingStripGrid'
import ShortAbout from './SectionsIndex/ShortAbout'
import { Tracks } from './SectionsIndex/Tracks'
import { TrackTitleGrid } from '@components/TrackTitleGrid'

interface IProps {
    scroll: number
    initialNowPlaying?: IRecentTracks
    initialIntro?: any
    onShouldAnimate: (value: boolean) => void
}
export const Intro: React.FC<IProps> = ({
    scroll,
    initialNowPlaying,
    initialIntro,
}) => {
    const { x, y } = useMousePosition() as any
    return (
        <div className={tw('flex flex-col content-center gap-10')}>
            {/* <TrackingLineGrid elements={7} pointerX={x} pointerY={y} /> */}
            <IntroTop
                scroll={scroll}
                initialNowPlaying={initialNowPlaying && initialNowPlaying}
                initialIntro={initialIntro && initialIntro}
            />
            <ShortAbout />
            <TrackTitleGrid />
        </div>
    )
}
