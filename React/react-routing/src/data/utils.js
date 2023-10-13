import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem('loggedin')  || false
    if (!isLoggedIn) {
        const response =  redirect('/login')
        response.body = true
        return response
    } 
    return isLoggedIn
}
