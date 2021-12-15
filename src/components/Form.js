import React from 'react'

function Form() {
    return (
        <div className="formularioContenedor" id="contacto">
            <div className="formularioTitulos">
                <h2>Conversemos sobre tu proyecto</h2>
                <h3>Nos encantaría ayudarte</h3>
            </div>
            <div className="formulario">
                {/* Hay que poner el Email de Natalí y lo tiene que activar desde tu casilla de email */}
                <form action="https://formsubmit.co/your@email.com" method="POST">
                    <div className="formularioFlexRow">
                        <div className="formularioDatos">
                            <div className="formularioInputs">
                                <i className="bi bi-person icono"></i>
                                <input type="text" name="nombre" placeholder="Nombre" required />
                            </div>
                            <div className="formularioInputs">
                                <i className="bi bi-envelope icono"></i>
                                <input type="email" name="email" placeholder="Correo Electrónico" required />
                            </div>
                            <div className="formularioInputs">
                                <i className="bi bi-chat-dots icono"></i>
                                <input type="text" name="asunto" placeholder="Asunto" required/>
                            </div>
                            <div className="formularioInputs">
                                <i className="bi bi-phone icono"></i>
                                <input type="tel" name="teléfono" placeholder="Teléfono (Opcional)" />
                            </div>

                        </div>
                        <div className="formularioConsulta">
                            <div className="formularioTextarea">
                                <i className="bi bi-pencil icono"></i>
                                <textarea name="consulta" placeholder="Dejanos tu consulta..." required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="formularioBoton">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form