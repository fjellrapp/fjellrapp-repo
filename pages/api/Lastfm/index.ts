import { IRecentTracks } from '@models/lastfm'
import { fetcher } from '@utils/fetcher'

const KEY = process.env.LASTFM_KEY
const API_ROOT = `http://ws.audioscrobbler.com/2.0/`

export const getRecentTracks = (limit?: number) => {
    return fetcher(
        `${API_ROOT}?method=user.getrecenttracks${
            limit && `&limit=${limit}`
        }&user=matshagen&api_key=${KEY}&format=json`
    )
        .then((response: IRecentTracks) => {
            if (response.recenttracks?.track?.length) return response
            return []
        })
        .catch((e) => {
            return new Error('Fikk ikke hentet scrobble')
        })
}
