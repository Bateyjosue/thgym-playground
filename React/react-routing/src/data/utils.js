import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem('loggedin')  || false
    if (!isLoggedIn) {
        const response =  redirect(`/login?redirectTo=${pathname}`)
        response.body = true
        return response
    } 
    return isLoggedIn
}
