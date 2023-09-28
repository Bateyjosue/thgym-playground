
import React from 'react';
function App() {
  const [signUpData, setSignUpData] = React.useState({
    email: 'j@gmail.com',
    password: '000000',
    confirmPassword: '000000',
    joinNewsLetter: true
})

function handleSubmit(event) {
    event.preventDefault()
    signUpData.password === signUpData.confirmPassword 
    ? console.log("Successfully signed up")
    : console.log("passwords to not match")
    
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
        <div className="popup ">

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
