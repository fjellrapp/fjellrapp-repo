import { NowPlaying } from '@components/NowPlaying'
import { IRecentTracks } from '@models/lastfm'
import fetcher from '@utils/fetcher'
import { getLatestTracks } from '@utils/querystrings'
import useSWR from 'swr'
import HorizontalLine from '../../components/Svgs/HorizontalLine'
import { BsSpotify } from 'react-icons/bs'

interface IProps {
    scroll: number
    initialNowPlaying?: IRecentTracks
    onShouldAnimate: (value: boolean) => void
}
export const Intro: React.FC<IProps> = ({
    scroll,
    initialNowPlaying,
    onShouldAnimate,
}) => {
    const { data, error } = useSWR<IRecentTracks>(
        process.env.NEXT_PUBLIC_LASTFM_KEY
            ? getLatestTracks(process.env.NEXT_PUBLIC_LASTFM_KEY)
            : null,
        fetcher,
        { fallbackData: initialNowPlaying }
    )
    const trackIsCurrentlyPlaying = Boolean(
        data?.recenttracks?.track?.length &&
            data.recenttracks.track[0]['@attr']?.nowplaying
    )

    return (
        <div
            className="flex flex-col items-center content-center justify-center h-screen"
            onMouseOver={() => onShouldAnimate(true)}
            onMouseLeave={() => onShouldAnimate(false)}
        >
            <HorizontalLine
                width={50}
                height={1}
                x={0}
                y={5}
                scroll={scroll / 5}
            />

            <div className="grid content-center justify-end grid-cols-1 grid-rows-2 text-white gap-7 h- place-items-end">
                <div className="flex flex-col gap-5 align-start">
                    <h1 className="font-medium tracking-widest">
                        Frontend developer based in Oslo
                    </h1>
                </div>

                {data?.recenttracks?.track?.length && !error && (
                    <NowPlaying
                        track={data.recenttracks.track[0]}
                        afterIcon={
                            trackIsCurrentlyPlaying ? (
                                <BsSpotify size="20" />
                            ) : undefined
                        }
                        link
                    />
                )}
            </div>
        </div>
    )
}
