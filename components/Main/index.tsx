import Header from '../../modules/Header'

const Main: React.FC = ({ children }) => {
    return (
        <main className="h-screen bg-fantasticBg">
            <div className="mx-8 md:mx-20 lg:mx-28">{children}</div>
        </main>
    )
}

export default Main
