import AppShell from '@components/AppShell'
import useScrollPosition from '@hooks/useScrollPosition'
import { IRecentTracks, ITrack } from '@models/lastfm'
import { Intro } from '@modules/Sections'
import type { NextPage } from 'next'
import { useState } from 'react'
import { getLatestTracks } from './api/lastfm'

interface IProps {
    nowPlaying: IRecentTracks
}
const Home: NextPage<IProps> = ({ nowPlaying }) => {
    const [_, setShouldAnimate] = useState(false)
    const scroll = useScrollPosition()
    return (
        <AppShell>
            <Intro
                scroll={scroll}
                onShouldAnimate={setShouldAnimate}
                initialNowPlaying={nowPlaying && nowPlaying}
            />
        </AppShell>
    )
}

export async function getStaticProps() {
    const nowPlaying = await getLatestTracks()
    return {
        props: {
            nowPlaying,
        },
    }
}

export default Home
