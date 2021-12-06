import React from 'react'
import Nav from '../components/Nav'
import Proposito from './Proposito'
import MisionVision from './MisionVision'
import Valores from './Valores'
import Frase from './Frase'
import Form from './Form'
import Footer from './Footer'

function Home() {
    return (
        <>
            <Nav />
            <Proposito/>
            <MisionVision/>
            <Valores/>
            <Frase/> 
            <Form/>
            <Footer/>
        </>
    )
}

export default Home
