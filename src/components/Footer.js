import React from  "react";
import { Box,Container,Row,Column,FooterLink, Heading,} from "./FooterStyles";

const Footer = ()=> {
    return(
        <Box>
            <h1 style={{color:"green",textAlign:"center",marginTop:"-50px"}}>Buy the books for learn programing</h1>
            <Container>
                <Row>
                    <Column>
                    <Heading>About Us</Heading>
                    <FooterLink href= "#" >Aim</FooterLink>
                    <FooterLink href="#" >Vision</FooterLink>
                    <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                    <Heading>Services</Heading>
                    <FooterLink href="#">Writing</FooterLink>
                    <FooterLink href="#">Internships</FooterLink>
                    <FooterLink href="#">Code</FooterLink>
                    <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                    <Heading>Contact Us </Heading>
                    <FooterLink href="#"> Alex</FooterLink>
                    <FooterLink href="#"> Sergi</FooterLink>
                    <FooterLink href="#"> Diego</FooterLink>
                    <FooterLink href="#"> Carlos</FooterLink>
                    </Column>
                    <Column>
                    <Heading>Social Media</Heading>
                    <FooterLink href="#"><i className="fab fa-Facebook-f"><span style={{marginLeft:"10px"}}>Facebook</span></i></FooterLink>
                    <FooterLink href="#"><i className="fab fa-instagram"><span style={{marginLeft:"10px"}}>instagram</span></i></FooterLink>
                    <FooterLink href="#"><i className="fab fa-twiter"><span style={{marginLeft:"10px"}}>Twitter</span></i></FooterLink>
                    <FooterLink href="#"><i className="fab fa-youtube"><span style={{marginLeft:"10px"}}>Youtube</span></i></FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};

export default Footer;
                      
