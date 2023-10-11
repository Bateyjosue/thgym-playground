
// export const getVans = async () => {
//     const res = await fetch('/api/vans')
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans.....", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export const getVan = async (id) => {
// const res = await fetch('/api/vans/' + id)
//     const data = await res.json()
//     return data
// }

// export const getHostVans = async () => {
//     const res = await fetch('/api/host/vans')
//     const data = await res.json()
//     return data
// }

// export const getHostVan = async (id) => {
//     const res = await fetch('/api/host/vans/' + id)
//     const data = await res.json()
//     return data
// }   


// New Vans API

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
