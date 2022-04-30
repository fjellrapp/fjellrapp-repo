export const toggleTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    } else {
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
}
