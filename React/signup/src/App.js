
import React from 'react';
function App() {
  const [signUpData, setSignUpData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    joinNewsLetter: true
})

function handleSubmit(event) {
    const popup = document.querySelector('.popup')
    event.preventDefault()
    signUpData.password === signUpData.confirmPassword 
    ? popup.textContent = "Successfully signed up"
    : popup.textContent ="passwords not match"
    popup.style["display"] = "block"
    popup.style["position"] = "fixed"

    setTimeout(() => {
      popup.style["display"] = "none"
    }, 3000)
    
    signUpData.joinNewsLetter && console.log("Thanks for signing up for our newsletter!")
    
}

function handleSignUpData(e){
    const { name, value, type, checked } = e.target
    setSignUpData((prevSignUpData)=>{
        return {
            ...prevSignUpData,
            [name]: type === 'checkbox' ? checked : value
        }
    })
}


return (
    <div className="form-container">
        <div className={`popup bg-gray-200 rounded-xl hidden  p-4`}>
        </div>
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                onChange={handleSignUpData}
                value={signUpData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"                    
                onChange={handleSignUpData}
                value={signUpData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="confirmPassword" 
                onChange={handleSignUpData}
                value={signUpData.confirmPassword}                    
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name='joinNewsLetter'
                    onChange={handleSignUpData}                        
                    checked={signUpData.joinNewsLetter}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
)
}

export default App;
