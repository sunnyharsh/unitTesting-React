import React, { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email) && password) {
            setIsSubmit(true)
        } else {
            return setIsSubmit(false);
        }
    };
    const formReset = (e) => {
        e.preventDefault();
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <div>{isSubmit ? email : null}</div>
            <form action="">
                <div>
                    <label htmlFor="email" name="email" data-testid="foo">Email</label>
                    <input value={email}
                        type="email"
                        name="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password" name="password" data-testid="foo">Password</label>
                    <input
                        value={password}
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <button onClick={handleSubmit} data-testid="submit">Submit</button>
                    <button onClick={formReset} data-testid="reset" >Reset</button>
                </div>
            </form>
        </div>
    )
}
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(email)) {
        return true;
    }
    return false;
};
export default Login