import React from 'react';
import FormContact from './FormContact';
import BoxText from '../Work/BoxText';
import ButtonSusoft from '../Button/ButtonSusoft';
import styled from 'styled-components';
import { GrMail } from 'react-icons/gr';

const ContactSection = () => {
   
    return (
        <section className="container-fluid py-3 position-relative">
            <PositionDiv id="contact" ></PositionDiv>
            <BoxText 
                text= '¡Tu opinión nos interesa, contáctanos!'
            />
            <BoxFontStyle className="row mx-auto mx-2">
            
                <div className="row justify-content-center mx-auto col-md-6 col-sm-12">
                    <div className="col-lg-5 col-sm-12 ">
                            <ButtonSusoft className="btn btn-block"
                                background= '#f9aa33'
                                btnText= 'Formulario de Contacto'
                            />
                    </div>
                </div>
            
            </BoxFontStyle>
            <FormContact />
            
            <span> 
                <BoxText 
                    icon = {<GrMail />}
                    text = 'Escríbenos'
                />   
            <p className="lead text-muted text-center">contacto@susoft.com.ar</p>        
            </span>
        </section>
    );
};

export default ContactSection;

const BoxFontStyle = styled.div`{
    font-size: 20px;
}`;

const PositionDiv = styled.div`{
    position: absolute;
    top: -10vh;
}`;