import { tw } from '@utils/tw'

const ShortAbout: React.FC<any> = () => {
    return (
        <section
            className={tw(
                'flex flex-col justify-center p-10 my-10 bg-white shadow-lg rounded-lg'
            )}
        >
            <div className="flex flex-col gap-3 text-black">
                <h2>Some context</h2>
                <p>
                    This site is supposed to function as a bucket to put stuff
                    in. I enjoy music and photography, so there might be some of
                    that here too.
                </p>
            </div>
        </section>
    )
}

export default ShortAbout
