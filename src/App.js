import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import NominationList from "./components/NominationList";
import Results from "./components/Results";
import { apikey } from "./secrets";

function App() {
  const [nominations, setNominations] = useState([]);
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState("");

  //This function triggers when user types keyword in input form
  //Save the user input (movie title keyword) to state as keyword
  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };

  //This function triggers when user click "save" on movie.
  //Adds the nomination to state as nominations
  const addNomination = (evt, userChoice) => {
    let copy = [...nominations];
    copy = [...copy, { id: nominations.length + 1, movie: userChoice }];
    setNominations(copy);
  };

  const deleteNomination = (evt, userChoice) => {
    let copy = nominations.filter(
      (nomination) => nomination.movie.Title !== userChoice
    );
    setNominations(copy);
  };

  //This useEffect triggers if the keyword (state) changes.
  //Fetch the movies based on the keyword & save to state as results
  useEffect(() => {
    const fetchMovies = async (title) => {
      try {
        if (title) {
          const { data } = await axios.get(
            `http://www.omdbapi.com/?apikey=${apikey}&s=${title}&page=1`
          );
          if (data.Search) {
            setResults(data.Search);
          }
        }
      } catch (error) {
        console.log("error fetching movie data", error);
      }
    };
    fetchMovies(keyword);
  }, [keyword]);

  return (
    <Container>
      <Header />
      <SearchForm handleInputChange={handleInputChange} keyword={keyword} />
      <Results
        addNomination={addNomination}
        results={results}
        keyword={keyword}
      />
      <NominationList
        nominations={nominations}
        deleteNomination={deleteNomination}
      />
    </Container>
  );
}

export default App;
