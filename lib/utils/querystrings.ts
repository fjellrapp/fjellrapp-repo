import { LASTFM_API_ROOT } from './constants'

const getLatestTracks = (key: string, limit?: number) =>
    `${LASTFM_API_ROOT}?method=user.getrecenttracks${`&limit=${
        limit ?? 1
    }`}&user=matshagen&api_key=${key}&format=json`

export { getLatestTracks }
