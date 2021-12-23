import React, { lazy, Suspense } from 'react'

import FadeInSections from "./FadeInSections";

/* 
    Esta importacion con lazy hace que al principio la pagina no cargue toda si no que va cargando
    componentes a medida que se van usando
*/

/*
    Suspense es un componente de React que nos va a permitir suspender algo cuando esta en modo lazy(). 
    El cual nos va a permitir importar un componente que no será cargado hasta que este sea llamado. 
    De esta forma mejoraremos el tiempo de carga de nuestra aplicación enormemente.
*/

const Nav = lazy(() => import(/* webpackChunkName: "Nav" */ '../components/Nav'));
const Proposito = lazy(() => import(/* webpackChunkName: "Proposito" */ '../components/Proposito'));
const MisionVision = lazy(() => import(/* webpackChunkName: "MisionVision" */ '../components/MisionVision'));
const Valores = lazy(() => import(/* webpackChunkName: "Valores" */ '../components/Valores'));
const Frase = lazy(() => import(/* webpackChunkName: "Frase" */ '../components/Frase'));
const Form = lazy(() => import(/* webpackChunkName: "Form" */ '../components/Form'));
const Experiencia = lazy(() => import(/* webpackChunkName: "Experiencia" */ '../components/Experiencia'));
const Footer = lazy(() => import(/* webpackChunkName: "Footer" */ '../components/Footer'));


function Home() {
    return (
        <>
            <Suspense fallback={null}>
                <FadeInSections>
                    <Nav />
                </FadeInSections>
            </Suspense>
            <Suspense fallback={null}>
                <FadeInSections>
                    <Proposito />
                </FadeInSections>
            </Suspense>
            <Suspense fallback={null}>
                <FadeInSections>
                    <MisionVision />
                </FadeInSections>
            </Suspense>
            <Suspense fallback={null}>
                <FadeInSections>
                    <Frase />
                </FadeInSections>
            </Suspense>
            <Suspense fallback={null}>
                <Valores />
            </Suspense>
            <Suspense fallback={null}>
                <FadeInSections>
                    <Experiencia />
                </FadeInSections>
            </Suspense>
            <Suspense fallback={null}>
                <FadeInSections>
                    <Form />
                </FadeInSections>
            </Suspense>
            <Suspense fallback={null}>
                <FadeInSections>
                    <Footer />
                </FadeInSections>
            </Suspense>
        </>
    )
}

export default Home
