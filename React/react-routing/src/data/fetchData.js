
export const getVans = async () => {
    const res = await fetch('/api/vans')
    const data = await res.json()
    return data
}

export const getVan = async (id) => {
const res = await fetch('/api/vans/' + id)
    const data = await res.json()
    return data
}

export const getHostVans = async () => {
    const res = await fetch('/api/host/vans')
    const data = await res.json()
    return data
}

export const getHostVan = async (id) => {
    const res = await fetch('/api/host/vans/' + id)
    const data = await res.json()
    return data
}                                                                                                                                 