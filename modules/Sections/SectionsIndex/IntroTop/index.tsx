import { NowPlaying } from '@components/NowPlaying'
import HorizontalLine from '@components/Svgs/HorizontalLine'
import { IRecentTracks } from '@models/lastfm'
import { SanityImageAssetDocument } from '@sanity/client'
import fetcher from '@utils/fetcher'
import { getLatestTracks } from '@utils/querystrings'
import { getIntro } from 'pages/api/cms/intros'
import { useEffect, useState } from 'react'
import { BsSpotify } from 'react-icons/bs'
import useSWR from 'swr'

interface IProps {
    scroll: number
    initialNowPlaying: IRecentTracks | undefined
}
interface IContent {
    image: SanityImageAssetDocument
    ingress: string
    subtitle: string
}
export const IntroTop: React.FC<IProps> = ({ scroll, initialNowPlaying }) => {
    const [content, setContent] = useState<IContent[]>([])
    const { data, error } = useSWR<IRecentTracks>(
        process.env.NEXT_PUBLIC_LASTFM_KEY
            ? getLatestTracks(process.env.NEXT_PUBLIC_LASTFM_KEY, 5)
            : null,
        fetcher,
        { fallbackData: initialNowPlaying }
    )

    const trackIsCurrentlyPlaying = Boolean(
        data?.recenttracks?.track?.length &&
            data.recenttracks.track[0]['@attr']?.nowplaying
    )

    useEffect(() => {
        getIntro()
            .then((intro: IContent[]) => intro?.length && setContent(intro))
            .catch((err) => console.log(err))
    })
    return (
        <section className="z-10 flex flex-col justify-center h-full p-5 mt-20 bg-white dark:bg-fantasticBg">
            <HorizontalLine
                width={50}
                height={1}
                x={0}
                y={5}
                scroll={scroll / 5}
            />

            <div className="grid content-center justify-end grid-cols-1 grid-rows-2 text-black dark:text-white gap-7 w-fit">
                <div className="flex flex-col gap-5 align-start">
                    <h1 className="font-medium tracking-widest">
                        {content[0]?.ingress}
                    </h1>
                </div>

                <div className="flex justify-end w-full">
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
        </section>
    )
}
