import { IRecentTracks, ITrack } from '@models/lastfm'
import fetcher from '@utils/fetcher'
import { getLatestTracks } from '@utils/querystrings'
import { tw } from '@utils/tw'
import { useEffect } from 'react'
import useSWR from 'swr'

export const TrackTitleGrid = () => {
    const { data, error } = useSWR<IRecentTracks>(
        process.env.NEXT_PUBLIC_LASTFM_KEY
            ? getLatestTracks(process.env.NEXT_PUBLIC_LASTFM_KEY, 20)
            : null,
        fetcher
    )

    useEffect(() => {
        if (data) {
            console.log('d', splitTrackGround())
            console.log("rebase test")
        }
    }, [data])

    const splitTrackGround = () => {
        if (!data?.recenttracks?.track?.length) {
            return
        }
        const lengthDivision = data.recenttracks.track.length / 3
        const uniqueSet = new Set()
        data.recenttracks.track.forEach((t) => {
            uniqueSet.add(t.name)
        })
        const trackArr = Array.from(uniqueSet) as string[]
        const resultArray: string[][] = []
        // data.recenttracks.track.sort((a, b) => {
        //     return a.name.length < b.name.length ? -1 : 1
        // })
        for (let i = 0; i < lengthDivision; i++) {
            resultArray.push(trackArr.slice(i * 3, (i + 1) * 3))
        }

        return resultArray
    }

    return (
        <div className="grid grid-rows-3 gap-5 p-10 border-t-2w-fit">
            {splitTrackGround()?.map((trackArray, index) => (
                <div
                    key={index}
                    className={tw(`flex relative gap-5`)}
                    style={{
                        left: `${index % 2 === 0 ? 0 : 0}rem`,
                    }}
                >
                    {trackArray
                        .sort((a, b) => {
                            return a.length < b.length ? 1 : -1
                        })
                        .map((track, index) => (
                            <p
                                key={`${track}${index}`}
                                className="text-sm font-medium tracking-widest text-black dark:text-white"
                            >
                                {track}
                            </p>
                        ))}
                </div>
            ))}
        </div>
    )
}
