import { Card, CardBody, CardTitle, CardImg, CardText, Col, ButtonGroup, Button, Badge } from 'reactstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faVideoCamera, faStar, } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function Film(props) {


    var tabGlobalRating=[] 

    for(var i=0; i<10; i++){
        var color={}
        if(i<props.globalRating){
            color = {color: "#f1c40f"}
        }
        tabGlobalRating.push(<FontAwesomeIcon icon={faStar} style={color} />)


    }

    // useStat likeMovie

    const [likeMovie, setLikeMovie] = useState(false)

    var colorLike = "white"

    var clickLike = () =>{ !likeMovie? setLikeMovie(true) : setLikeMovie(false)}
    if(likeMovie ){
        colorLike = "red"
    }else{
        colorLike= "white"
    }

   

    // useStat watchMovie

    const [watchMovie, setWatchMovie] = useState(false)
    const [countWatchMovie, setCountWatchMovie] =useState(0)

    var clickMovie = ()=>{
        setWatchMovie(true); 
        setCountWatchMovie(countWatchMovie+1)  
    }

    var colorMovie = "white"
    if(watchMovie){
        colorMovie = "red"
    }else{
        colorMovie= "white"
    }




    
    //useState stars


    const [myRatingMovie, setMyRatingMovie] = useState(1)
    // var colorStars = "white"
    
    // var clickAddStars = () =>{
    //     setMyRatingMovie(myRatingMovie +1)
        
    //     colorStars="yellow"

    // }


    // var clickLessStars = ()=>{
    //     setMyRatingMovie(myRatingMovie -1)
    //     colorStars="white"
    // }
    

    var vote =(i) =>{
        setMyRatingMovie(i +1)
        
        
    }

var tabRating = []
    for(let i=0;i<=9;i++){

        let color = {}

        if(i<myRatingMovie){
             console.log(myRatingMovie)
            color = {color: '#f1c40f'}
            tabRating.push(<FontAwesomeIcon style={color} icon={faStar}  onClick={()=>vote(i)} /> )
        }else{
            color = {color: 'white'}
            tabRating.push(<FontAwesomeIcon style={color} icon={faStar} onClick={()=>vote(i)}  /> )
        }
        
    }


//moyenne

var nbrNote = props.globalRating * props.globalCountRating
  var nbrVote = props.globalCountRating

  if(myRatingMovie){
    nbrVote += 1
      nbrNote += myRatingMovie
  }
 
  var avgTotal = Math.round(nbrNote/nbrVote)


  var tabGlobalAllRating = []

  for(let i=0; i<10;i++){
      var color = {}
      if(i<avgTotal){
        
          color = {color: '#f1c40f'}
      }
     
      tabGlobalAllRating.push(<FontAwesomeIcon style={color} icon={faStar} />)
  }






    return (

            
                    <Col xs="12" lg="3" xl="4" >
                        <Card style={{ margin: "20px", borderColor:"#FFFFFF ", backgroundColor:"black", color:"#FFFFFF"}}>
                            <CardImg top src={props.movieImg} alt={props.movieImg} style={{ borderColor:"#FFFFFF "}}/>
                            <CardBody>

                                <CardText >like <FontAwesomeIcon icon={faHeart} style={{ cursor: "pointer", color:   colorLike}} onClick={ ()=> clickLike()} /> </CardText>
                                <CardText>Nombre de vues <FontAwesomeIcon icon={faVideoCamera} style={{color: colorMovie}} onClick={ ()=> clickMovie()}   /><Badge color="secondary">{countWatchMovie}</Badge></CardText>
                                <CardText>
                                    Mon avis 
                                    {tabRating }
                                    {/* <ButtonGroup size='sm'>
                                        <Button color='danger' onClick={()=>clickLessStars()}> - </Button>
                                        
                                        <Button color='danger' onClick={()=>clickAddStars()}> + </Button>
                                    </ButtonGroup>  */}
                                </CardText>
                                <CardText>Moyenne : 
                                    {tabGlobalAllRating}
                                    ({nbrVote})
                                    </CardText>
                                <CardTitle>titre : {props.movieName}</CardTitle>
                                <CardText>description :{props.movieDesc} </CardText>
                            </CardBody>
                        </Card>
                    </Col>


 
    )
}