import React from 'react'
import Nav from '../components/Nav'
import Proposito from './Proposito'
import MisionVision from './MisionVision'
import Valores from './Valores'
import Frase from './Frase'
import Form from './Form'
import Footer from './Footer'
import Experiencia from './Experiencia'

function Home() {
    return (
        <>
            <Nav />
            <Proposito/>
            <MisionVision/>
            <Frase/>
            <Valores/>
            <Experiencia/>
            <Form/>
            <Footer/>
        </>
    )
}

export default Home
