export interface IRecentTracks {
    recenttracks: {
        track: ITrack[]
        '@attr': {
            user: string
            totalPages: string
            page: string
            total: string
            perPage: string
        }
    }
}

export interface ITrack {
    artist: {
        mbid: string
        '#text': string
    }
    streamable: number
    image: {
        size: 'small' | 'medium' | 'large' | 'extralarge'
    }[]
    mbit: string
    album: {
        mbid: string
        '#text': string
    }
    name: string
    url: string
    date: {
        uts: string
        '#text': string
    }
}
