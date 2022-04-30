export const setLocalStorage = (key: string, value: any) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const getLocalStorage = (key: string) => {
    if (typeof localStorage !== 'undefined') {
        const value = localStorage?.getItem(key)
        return value ? JSON.parse(value) : null
    }
    return null
}
