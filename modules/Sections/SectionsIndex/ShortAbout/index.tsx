import { tw } from '@utils/tw'
import { getHeros, IHeros } from 'pages/api/cms/heros'
import { useEffect, useState } from 'react'

const ShortAbout: React.FC<any> = () => {
    const [heros, setHeros] = useState<any>([])
    useEffect(() => {
        getHeros().then((heros: IHeros[] | void | undefined) => {
            setHeros(heros)
        })
    }, [])
    return (
        <section
            className={tw('flex flex-col p-10 bg-white dark:bg-fantasticBg')}
        >
            <div className="flex flex-col gap-3 text-black dark:text-white place-items-end">
                {heros?.length &&
                    heros.map((hero: IHeros) => {
                        return (
                            <div
                                key={hero['_id']}
                                className="flex flex-col gap-3 text-black dark:text-white"
                            >
                                <h1 className="object-left text-base font-medium tracking-widest">
                                    {hero.ingress}
                                </h1>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default ShortAbout
