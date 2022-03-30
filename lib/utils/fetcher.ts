export const fetcher = (args: RequestInfo, options?: RequestInit | undefined) =>
    fetch(args, { ...options })
        .then((res) => res.json())
        .catch((err) => {
            console.log('has err', err)
        })
