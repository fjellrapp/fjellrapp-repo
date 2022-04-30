import client from '../config'

export const getIntro = async () => {
    return await client.fetch('*[_type == "intro"]').then(
        (res) => {
            if (res) return res
        },
        (err) => {
            console.log('Kunne ikke hente intro: ', err)
        }
    )
}
