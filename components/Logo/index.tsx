import { tw } from '../../lib/utils/tw'

export const Logo = () => {
    return (
        <h1
            className={tw(
                'px-4 py-2',
                ' text-lg font-medium font-primary tracking-widest text-black dark:text-white'
            )}
        >
            Fjellrapp
        </h1>
    )
}
