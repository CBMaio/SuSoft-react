import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

class FormContact extends Component {

    render() {
        return(

            <div className= "row mx-2 p-2 mt-4">
                <div className="col-12 mx-auto">
                    <form>
                        <div className="form-group">
                            <label htmlFor='name'>Nombre completo:</label>
                            <input className="form-control" type="text" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="form-group">
                            <label htmlFor='mail'>Correo electrónico:</label>
                            <input className="form-control" type="email" placeholder="correo@ejemplo.com" />
                        </div>
                        <div className="form-group">
                            <label>Asunto del mensaje: </label>
                            <input className="form-control" type="text" maxLength="40"/>
                        </div>
                        <div className="form-group">
                            <label>Dejanos tu mensaje</label>
                            <TextareaStyle className="form-control" maxLength="300" rows="4" cols="40"></TextareaStyle>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-5 col-sm-12">
                                <ButtonFormStyle className="btn btn-block btn-block">Enviar</ButtonFormStyle>
                            </div>
                        </div>
                    </form>
                </div>               
            </div>
        );
    };
};

export default FormContact;

const TextareaStyle = styled.textarea`{
    resize: none;
}`;

const ButtonFormStyle = styled(Button)`{
    background: #344955;
    border: none;
    outline: none;
    transition: all .2s ease-in-out;

    &:hover {
        outline: none;
        border: none;
        background: #344955; 
    }
}`