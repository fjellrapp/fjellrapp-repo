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
            console.log('dd', splitTrackGround())
        }
    }, [data])

    const splitTrackGround = () => {
        if (!data?.recenttracks?.track?.length) {
            return
        }
        const lengthDivision = data.recenttracks.track.length / 3
        const resultArray: ITrack[][] = []
        for (let i = 0; i < lengthDivision; i++) {
            resultArray.push(data.recenttracks.track.slice(i * 3, (i + 1) * 3))
        }
        return resultArray
    }

    return (
        <div className="grid grid-rows-3 gap-5">
            {splitTrackGround()?.map((trackArray, index) => (
                <div
                    key={index}
                    className={tw(`flex relative gap-5`)}
                    style={{
                        left: `${index * 0.5}rem`,
                    }}
                >
                    {trackArray.map((track) => (
                        <p
                            key={track.name}
                            className="text-sm font-bold text-white"
                        >
                            {track.name}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}
