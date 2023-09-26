import {NavLink} from 'react-router-dom'
function Home() {

  return (
    <>
      <main className="container mx-auto px-4 my-10">
        <section className="grid grid-cols-3 gap-2">
          <article className="p-1 border rounded-xl">
            <NavLink to='/hello-world'>
              <h2 className="text-lg font-bold">Exercise 1: Hello World!</h2>
            </NavLink>
            <p className="text-light text-sm my-2">
            Every programming language starter tutorial teaches you how to output "Hello, World!" using the language.
            </p>
            <ul className="list text-xs flex gap-1 ">
              <li className="bg-gray-300 rounded-lg p-1 flex items-center underline">HTML</li>
              <li className="bg-gray-300 rounded-lg p-1 flex items-center underline text-center ">
                <a href="https://www.w3schools.com/css/css_align.asp" target="_black">
                  How to center a text inside a div
                </a>
              </li>
            </ul>
          </article>
          
          
        </section>
      </main>
      
    </>
  )
}

export default Home
