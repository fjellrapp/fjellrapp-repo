const apiRoot = 'https://ws.audioscrobbler.com/2.0/'
const key = process.env.NEXT_PUBLIC_LASTFM_KEY
const latestTracks = (limit?: number) => {
    return `${apiRoot}?method=user.getrecenttracks${`&limit=${
        limit ?? 1
    }`}&user=matshagen&api_key=${key}&format=json`
}

export const getLatestTracks = async () => {
    console.log(latestTracks())
    return await (await fetch(latestTracks())).json()
}
