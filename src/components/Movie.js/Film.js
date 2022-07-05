import { Card, CardBody, CardTitle, CardImg, CardText, Col, Container, Row, ButtonGroup, Button, Badge } from 'reactstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faVideoCamera, faStar, faPlus, faMinus,  } from '@fortawesome/free-solid-svg-icons'


export default function Film(props) {


    var tabNote=[] 

    for(var i=0; i<10; i++){
        var color={}
        if(i<props.globalRating){
            color = {color: "#f1c40f"}
        }
        tabNote.push(<FontAwesomeIcon icon={faStar} style={color} />)
    }

    return (

            
                    <Col xs="12" lg="3" xl="4" >
                        <Card style={{ margin: "20px", borderColor:"#FFFFFF ", backgroundColor:"black", color:"#FFFFFF"}}>
                            <CardImg top src={props.movieImg} alt={props.movieImg} style={{ borderColor:"#FFFFFF "}}/>
                            <CardBody>
                            <CardText >Numero {props.key} </CardText>

                                <CardText >like <FontAwesomeIcon icon={faHeart} style={{ cursor: "pointer" }} /> </CardText>
                                <CardText>Nombre de vues <FontAwesomeIcon icon={faVideoCamera} style={{color: "red"}} /><Badge color="secondary">2</Badge></CardText>
                                <CardText>
                                    Mon avis 
                                    <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
        <FontAwesomeIcon icon={faStar} /> 
                                    <ButtonGroup size='sm'>
                                        <Button color='danger'> - </Button>
                                        
                                        <Button color='danger'> + </Button>
                                    </ButtonGroup> 
                                </CardText>
                                <CardText>Moyenne : {tabNote}</CardText>
                                <CardTitle>titre : {props.movieName}</CardTitle>
                                <CardText>description :{props.movieDesc} </CardText>
                            </CardBody>
                        </Card>
                    </Col>


 
    )
}