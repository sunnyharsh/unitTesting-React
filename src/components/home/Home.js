import React from 'react'
import { Cursor, useTypewriter, Typewriter } from 'react-simple-typewriter'


const Home = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Designer', 'Photographer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })


    console.log(text)
    return (
        <div>
            <h1 style={{ margin: "50px" }}>
                i'm a {' '}
                <span style={{ fontWeight: "bold", color: "green" }}>
                    {text}
                </span>
                <span>
                    <Cursor cursorStyle='<' />
                </span>
            </h1>

        </div>
    )
}
export default Home