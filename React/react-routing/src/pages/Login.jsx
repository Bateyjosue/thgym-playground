import { Form, useActionData } from 'react-router-dom';
import { loginUser } from '../data/fetchData';

export function loader({request}){
    return new URL(request.url).searchParams.get('message')
}

export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try{
        const data = await loginUser({ email, password })
        return data.user
    } catch(e){
       return e
    }
}

const Login = () => {

    const actionData = useActionData()

  return (
    <div className='login-container'>
        <h1 className='text-3xl my-4 mb-12 font-bold'>Sign in to your account</h1>
        {
            actionData && actionData.message &&
            <p className='text-red-500 text-2xl font-bold mb-5'>{actionData.message}</p>
        }
        <Form  className='login-form' method='post'>
            <input
                type='email'
                name='email'
                placeholder='Email address'
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
            />
            <button 
                type='submit'
            >
                {status === 'submitting' ? 'Logging in ...' : 'Log in'}
            </button>
        </Form>
    </div>
  )
}

export default Login