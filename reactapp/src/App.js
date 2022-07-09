import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  Container,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverHeader,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,

 } from 'reactstrap';

import Movie from './components/Movie'

function App() {


const [movieList, setMovieList]= useState([])
useEffect(() => {
  async function getData(){
    var rawResponse = await fetch('/new-movies')
    var response = await rawResponse.json()
    console.log(response.movies)

    setMovieList(response.movies)

    console.log(movieList)


    //recuperer les film en base de donnée de ma wishlist
    var responseWish = await fetch('/wishlist-movie')
    var jsonresponseWish = await responseWish.json()

    const wishListFromBd = jsonresponseWish.movies.map((movie, i) =>{
      return {name: movie.movieName,
      img:movie.movieImg}
    })

    setMoviesWishList(wishListFromBd)
    setMoviesCount(wishListFromBd.length)

  }
getData()


}, [])

  const [moviesCount,setMoviesCount] = useState(0)
  const [moviesWishList, setMoviesWishList] = useState([])

  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  var handleClickAddMovie = async (name, img) => {
    setMoviesCount(moviesCount+1)
    setMoviesWishList([...moviesWishList, {name:name,img:img}])


    //ajout de film dans la database en plus de la wishlist
    const response = await fetch('/wishlist-movie', {
      method: 'POST',
      headers: {'Content-type': 'application/x-www-form-urlencoded'},
      body: `name=${name}&img=${img}`
    })
    
  }



  var handleClickDeleteMovie = async (name) => {
    setMoviesCount(moviesCount-1)
    setMoviesWishList(moviesWishList.filter(object => object.name != name))

    //supprimer film dans la db 
    const sup = await fetch(`/wishlist-movie/${name}`,{
      method: 'DELETE'
    })
  }

  var cardWish = moviesWishList.map((movie,i) => {
    return (
      <ListGroupItem>
        <ListGroupItemText onClick={() => {handleClickDeleteMovie(movie.name)}}>
        <img width="25%" src={movie.img} /> {movie.name}
        </ListGroupItemText>
      </ListGroupItem>
    )
  })



  var movieListItem = movieList.map((movie,i) => {
    var result = moviesWishList.find(element => element.name == movie.title)
    var isSee = false
    if(result != undefined){
      isSee = true
    }

    //il faut que la description ne depasse pas les 80 caracteres
    var result = movie.overview
    if(result.length > 80){
      result = result.slice(0,80)+'...'
    }

    //mettre image generique si les film n'ont pas d'image
    var urlImage = '/generique.jpg'
    if(movie.backdrop_path != null){
      urlImage = 'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path
    }

    return(<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={movie.title} movieDesc={result} movieImg={urlImage} globalRating={movie.vote_average} globalCountRating={movie.vote_count} />)
  })



  

  return (
    <div className="App" style={{ backgroundColor: "#000000", background: "url(./background-black.jpg)", backgroundSize: "cover"  }}>
      <Container>
        <Nav>
          <span className="navbar-brand">
          <img src='./logo.png' style={{ width: "80px", margin: "5px", }} alt="logo" />          
          </span>
          <NavItem>
          <NavLink style={{ color: "#FFFFFF", margin: "5px" }}>Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Button id="Popover1"  type="button">{moviesCount} films</Button>
              <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader style={{backgroundColor: "red"}}>WishList</PopoverHeader>
                <PopoverBody>
                <ListGroup>
                {cardWish}
                </ListGroup>
                </PopoverBody>
              </Popover>
            </NavLink>
          </NavItem>
        </Nav>
        <Row>
          {movieListItem}
        </Row>
      </Container>
    </div>
  );
}

export default App;
