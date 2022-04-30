import { SanityDocument } from '@sanity/client'
import client from '../config'

export interface IHeros extends SanityDocument {
    ingress: string
    paragraphs: string[]
    image?: any
}
export const getHeros = async () => {
    return await client.fetch('*[_type == "heros"]').then(
        (res: IHeros[]) => {
            console.log('RES', res)
            if (res) return res
        },
        (err) => {
            console.log('Kunne ikke hente heros: ', err)
        }
    )
}
