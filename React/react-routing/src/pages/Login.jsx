import { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import {loginUser} from '../data/fetchData'

export function loader({request}){
    return new URL(request.url).searchParams.get('message')
}

const Login = () => {
    const [loginFormData, setLoginFormData] = useState(
        {
            email: '',
            password: ''
        }
    )

    const navigate = useNavigate()

    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const message = useLoaderData();
    

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        try {
            const data = await loginUser(loginFormData)
            console.log(data)
        } catch (err) {
            setError(err)
        } finally {
            setStatus("idle")
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginFormData( prev => ({
          ...prev,
            [name]: value
        }))
    }

  return (
    <div className='login-container'>
       {message && <h2 className="red text-red-500 font-semibold mt-2">{message}</h2>}
       {error && <h2 className="red text-red-500 font-semibold mt-2">{error.message}</h2>}
        <h1 className='text-3xl my-4 mb-12 font-bold'>Sign in to your account</h1>
        <form onSubmit={handleSubmit} className='login-form'>
            <input
                type='email'
                name='email'
                placeholder='Email address'
                value={loginFormData.email}
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={loginFormData.password}
                onChange={handleChange}
            />
            <button 
                type='submit'
                disabled={status=== 'submitting'}
            >
                {status === 'submitting' ? 'Logging in ...' : 'Log in'}
            </button>
        </form>
    </div>
  )
}

export default Login