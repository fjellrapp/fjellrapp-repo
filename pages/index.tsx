import AppShell from '@components/AppShell'
import useScrollPosition from '@hooks/useScrollPosition'
import { IRecentTracks, ITrack } from '@models/lastfm'
import { Intro } from '@modules/Sections'
import type { NextPage } from 'next'
import { useState } from 'react'
import { getIntro } from './api/cms/intros'
import { getLatestTracks } from './api/lastfm'

interface IProps {
    nowPlaying: IRecentTracks
    introContent: any
}
const Home: NextPage<IProps> = ({ nowPlaying, introContent }) => {
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
    const introContent = await getIntro()
    return {
        props: {
            nowPlaying,
            introContent,
        },
    }
}

export default Home
