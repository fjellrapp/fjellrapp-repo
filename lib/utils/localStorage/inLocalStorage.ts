export const inLocalStorage = (key: string) => {
    return (
        typeof localStorage !== 'undefined' &&
        localStorage?.getItem(key) !== null
    )
}
