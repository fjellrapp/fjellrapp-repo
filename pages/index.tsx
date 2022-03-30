import type { NextPage } from 'next'
import { useState } from 'react'
import AppShell from '../components/AppShell'
import useScrollPosition from '../lib/hooks/useScrollPosition'
import { Intro } from '../modules/Intro'
import { getRecentTracks } from './api/Lastfm'

const Home: NextPage = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const scroll = useScrollPosition()
    return (
        <AppShell>
            <Intro scroll={scroll} onShouldAnimate={setShouldAnimate} />
        </AppShell>
    )
}

export async function getServerSideProps(context: any) {
    getRecentTracks(5)
    const KEY = process.env.LASTFM_KEY
    console.log('KEY', KEY)
    return {
        props: {},
    }
}

export default Home
