import { IRecentTracks } from '@models/lastfm'
import fetcher from '@utils/fetcher'
import { getLatestTracks } from '@utils/querystrings'
import useSWR from 'swr'

export const Tracks: React.FC<any> = () => {
    const { data, error } = useSWR<IRecentTracks>(
        process.env.NEXT_PUBLIC_LASTFM_KEY
            ? getLatestTracks(process.env.NEXT_PUBLIC_LASTFM_KEY, 10)
            : null,
        fetcher
    )

    return <div></div>
}
