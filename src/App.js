import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import NominationList from "./components/NominationList";
import Results from "./components/Results";
import AlertMessage from "./components/AlertMessage";
// import { apikey } from "./secrets";
import useLocalStorage from "./hooks/useLocalStorage";
const apikey = process.env.API_KEY;

function App() {
  // const [nominations, setNominations] = useState([]);
  //initialize the nominations as array (key="nominations", value=[])
  const [nominations, setNominations] = useLocalStorage("nominations", []);

  const [results, setResults] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  //This function triggers when user types keyword in input form
  //Save the user input (movie title keyword) to state as keyword
  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };

  //This function is triggered when user click "nominate" on movie.
  //Adds the nomination to state as nominations
  const addNomination = (evt, userChoice) => {
    if (nominations.length < 5) {
      let copy = [...nominations];
      copy = [...copy, { ...userChoice }];
      setNominations(copy);
      setAlert(true);
      window.scrollTo(0, 0);
    } else {
      setAlert(true);
      setAlertMessage("Error");
      window.scrollTo(0, 0);
    }
  };

  //This function is triggered when user clicks "Remove" from My Nomination list.
  //Deletes the nominated movie from the nominations
  const deleteNomination = (evt, userChoice) => {
    let copy = nominations.filter(
      (nomination) => nomination.Title !== userChoice
    );
    setNominations(copy);
    setAlert(false);
    setAlertMessage("");
  };

  //This function is triggered when user clicks the page number.
  //selected page will be inserted into the query.
  const handlePageClick = (evt) => {
    const selectedPage = evt.selected;
    setPage(selectedPage);
  };

  useEffect(() => {}, []);
  //This useEffect triggers if the keyword & page (state) changes.
  //Fetch the movies based on the keyword & save to state as results
  useEffect(() => {
    const fetchMovies = async (title) => {
      try {
        if (title) {
          const { data } = await axios.get(
            `http://www.omdbapi.com/?apikey=${apikey}&s=${title}&page=${page}`
          );
          if (data.Search) {
            setResults(data.Search);
            setResultCount(data.totalResults);
          }
        }
      } catch (error) {
        console.log("error fetching movie data", error);
      }
    };
    fetchMovies(keyword);
  }, [keyword, page]);

  return (
    <Container>
      <Header nominationsCount={nominations.length} />
      <SearchForm handleInputChange={handleInputChange} keyword={keyword} />
      {alert && (
        <AlertMessage
          setAlert={setAlert}
          nominations={nominations}
          alertMessage={alertMessage}
        />
      )}
      <Results
        addNomination={addNomination}
        results={results}
        keyword={keyword}
        nominations={nominations}
        setPage={setPage}
        totalResults={resultCount}
        handlePageClick={handlePageClick}
      />
      <NominationList
        nominations={nominations}
        deleteNomination={deleteNomination}
      />
    </Container>
  );
}

export default App;
