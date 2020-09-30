import React from 'react';
import FormContact from './FormContact';
import BoxText from '../Work/BoxText';
import ButtonSusoft from '../Button/ButtonSusoft';
import styled from 'styled-components';
import { GrMail } from 'react-icons/gr';

const ContactSection = () => {
   
    return (
        <section className="container-fluid py-3">
            <BoxText 
                text= '¡Tu opinión nos interesa, contáctanos!'
            />
            <BoxFontStyle className="container row mx-auto">
                
                <div className="col-md-5 col-sm-12 mx-auto">
                        <ButtonSusoft className="btn btn-block"
                            background= '#f9aa33'
                            btnText= 'Formulario de Contacto'
                        />
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
}`

const MailSusoft = styled.p`{

}`