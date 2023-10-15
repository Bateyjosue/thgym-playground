/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Header from '../components/Header'

interface User {
    firstName: string;
    lastName: string;
}



const BuildingForm = () => {
   
    const [UserInfo, setUserInfo ] = useState<User>({
        firstName: '',
        lastName: '',
    })

    const handleChange =(e: { preventDefault: () => void; target: { name: string; value: string; }; }) => {
        // const {name, value} = e.target
        e.preventDefault();
        setUserInfo((prevUserInfo) => {
            return {
                ...prevUserInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: React.MouseEvent): void => {
        e.preventDefault();
        if(UserInfo.firstName || UserInfo.lastName){
            alert(`Hello ${UserInfo.firstName} ${UserInfo.lastName}!`)
        }
        setUserInfo({
            firstName: '',
            lastName: '',
        })
    }

  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20'>
            <section className='mt-10'>
                <form className=' flex flex-col gap-4 '>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder='First Name'
                        className='border rounded-md p-2 outline-none focus:ring-2 focus:ring-yellow-800 ring-inset'
                        value={UserInfo.firstName} 
                        onChange={handleChange}
                        />
                    
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder='Last Name'
                        className='border rounded-md p-2 outline-none focus:ring-2 focus:ring-yellow-800 ring-inset'
                        value={UserInfo.lastName}
                        onChange={handleChange}

                        />
                    
                    <button type="button" 
                        className='uppercase border  bg-yellow-800 text-white p-2 rounded-lg w-[50%] mx-auto'
                        onClick={handleSubmit}
                        >
                            Click me
                    </button>
                </form>
            </section>
        </main>
    </>
  )
}

export default BuildingForm