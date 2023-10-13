import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
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
        if(data.user){
            localStorage.setItem("loggedin", true)
            const response =  redirect('/host')
            response.body = true
            return response
        }
    }catch(err){
        return err
    }
    return null
}

const Login = () => {
    const actionData = useActionData();
    const navigation = useNavigation();

    const status = navigation.state

  return (
    <div className='login-container'>
        <h1 className='text-3xl my-4 mb-12 font-bold'>Sign in to your account</h1>
        {
            actionData && <h3 className="red text-red-700 font-bold mb-4">{actionData.message}</h3>
        }
        <Form  className='login-form' method='post' replace>
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
                disabled={status === 'submitting'}
            >
                {status === 'submitting' ? 'Logging in ...' : 'Log in'}
            </button>
        </Form>
    </div>
  )
}

export default Login