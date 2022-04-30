import { SanityClient } from '@sanity/client'

const sanityClient = require('@sanity/client')
const token = process.env.SANITY_TOKEN
console.log(token)
const client: SanityClient = sanityClient({
    projectId: '9330patk',
    dataset: 'production',
    apiVersion: '2021-10-21', // use a UTC date string
    token: token,
    useCdn: true, // `false` if you want to ensure fresh data
})

export default client
