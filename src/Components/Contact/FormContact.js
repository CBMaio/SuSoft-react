import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonSusoft from '../Button/ButtonSusoft';

class FormContact extends Component {

    render() {
        return(

            <FormFontStyle className= "row mx-2 p-2 mt-4">
                <div className="col-12 col-md-6 mx-auto">
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
                            <div className="col-lg-5 col-sm-12">
                                <ButtonSusoft className="btn btn-block"
                                    background= '#344955'
                                    btnText= 'Enviar'
                                    colorText='#fff'
                                />
                            </div>
                        </div>
                    </form>
                </div>               
            </FormFontStyle>
        );
    };
};

export default FormContact;

const TextareaStyle = styled.textarea`{
    resize: none;
}`;

const FormFontStyle = styled.div`{
    font-size: 18px;
}`
