import Card, {User} from '../components/Card'
import Header from '../components/Header'
import {useState, useEffect} from 'react'

const WorkingApi = () => {
    const [userData, setUserData] = useState<User[]>([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(res => res.json())
      .then(data => setUserData(data))
    }, [refresh])

    const handleClick = () => {
        setRefresh(!refresh)
    }

  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20'>
            <section className='mt-10'>
                <button 
                    onClick={handleClick}
                    className='bg-yellow-800 w-[50%] mx-auto px-4 py-1 text-white rounded-xl font-bold shadow-xl'>
                        Fetch Random
                </button>
                <ul className='grid grid-cols-2 lg:grid-cols-5 gap-4 my-5 min-h-fit'>
                    {
                        userData.map((user: User) => (
                            <Card key={user.id} {...user} />
                        ))
                    }
                </ul>
            </section>
        </main>
    </>
  )
}

export default WorkingApi
