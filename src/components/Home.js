import React from 'react'
import Nav from '../components/Nav'
import Proposito from './Proposito'
import MisionVision from './MisionVision'
import Valores from './Valores'
import Frase from './Frase'
import Form from './Form'
import Footer from './Footer'
import Experiencia from './Experiencia'

import FadeInSections from "./FadeInSections";

function Home() {
    return (
        <>
            <Nav />
            <FadeInSections>
                <Proposito />
            </FadeInSections>
            <FadeInSections>
                <MisionVision />
            </FadeInSections>
            <FadeInSections>
                <Frase />
            </FadeInSections>
            <FadeInSections>
                <Valores />
            </FadeInSections>
            <FadeInSections>
                <Experiencia />
            </FadeInSections>
            <FadeInSections>
                <Form />
            </FadeInSections>
            <Footer />
        </>
    )
}

export default Home
