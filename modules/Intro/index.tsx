import HorizontalLine from '../../components/Svgs/HorizontalLine'

interface IProps {
    onShouldAnimate: (value: boolean) => void
    scroll: number
}
export const Intro: React.FC<IProps> = ({ scroll, onShouldAnimate }) => {
    return (
        <div
            className="flex flex-col items-center content-center justify-center h-screen"
            onMouseOver={() => onShouldAnimate(true)}
            onMouseLeave={() => onShouldAnimate(false)}
        >
            <HorizontalLine
                width={50}
                height={1}
                x={0}
                y={5}
                scroll={scroll / 5}
            />

            <div className="grid content-center justify-end grid-cols-1 grid-rows-2 gap-5 text-white h- place-items-end">
                <div className="flex flex-col gap-5 align-start">
                    <h1 className="font-medium tracking-widest">
                        Frontend developer based in Oslo
                    </h1>
                </div>

                <h2 className="text-sm font-light">
                    This site is primarily used to display my works and
                    interests.
                </h2>
            </div>
        </div>
    )
}
