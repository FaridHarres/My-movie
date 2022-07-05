import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import Film from './components/Movie.js/Film';
import { Row, Container } from 'reactstrap';



function App() {

  var movie = [
    {
      name: "BadBoys 3",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "./img/badboy3.jpg",
      note: 10,
      vote: 2
    },
    {
      name: "Frozen",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "./img/frozen.jpg",
      note: 10,
      vote: 4
    },
    {
      name: "jumanji",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "./img/jumanji.jpg",
      note: 4,
      vote: 5
    },
    {
      name: "once_upon",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "./img/once_upon.jpg",
      note: 6,
      vote: 7
    },
    {
      name: "starwars",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "./img/starwars.jpg",
      note: 4.6,
      vote: 3
    },
    {
      name: "terminator",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "./img/terminator.jpg",
      note: 6.2,
      vote: 1
    },
  ]

  var tabMovie = []

  for (var i = 0; i < movie.length; i++) {
    tabMovie.push(<Film key={i} globalCountRating={movie[i].vote} movieName={movie[i].name} movieDesc={movie[i].desc} movieImg={movie[i].img} globalRating={movie[i].note} />)
  }

  return (
    <div className="App" style={{ backgroundColor: "#000000", background: "url(./img/cinema.jpeg)", backgroundSize: "cover" }}>
      <Header />
      <Container style={{marginTop: "100px"}}>
        <Row >
          {tabMovie}

        </Row>
      </Container>

    </div>
  );
}

export default App;
