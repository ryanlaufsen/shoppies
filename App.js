import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import BackgroundVideo from './components/BackgroundVideo';
import MovieList from './components/MovieList';
import AddNomination from './components/AddNomination';
import RemoveNomination from './components/RemoveNomination';
import NominationsBanner from './components/NominationsBanner';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominations, setNominations] = useState([]);
  const [nomLength, setNomLength] = useState(0);

  const getMovieRequest = async (searchValue, pageNumber) => {
    const url = 'http://www.omdbapi.com/?s=' + searchValue + '&apikey=3bffe675&page=' + pageNumber;
    
    const res = await fetch(url);
    const resJson = await res.json();

    if(resJson.Search) {
      setMovies(resJson.Search);
    }
  };
  
  useEffect(() => {
    setNomLength(nominations.length);
  }, [nominations.length, nomLength])

  useEffect(() => {
    let i;
    for (i = 0; i < 5; i++) {
      getMovieRequest(searchValue, i); // does a fetch over 5 pages (50 movies) (any higher exhausted the 1000 response daily limit)
    }
  }, [searchValue]);

  useEffect(() => {
    const movieNominations = JSON.parse(localStorage.getItem('shoppies-nominations'));
    if (movieNominations === null) {
      setNominations([]);
    } else {
      setNominations(movieNominations);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('shoppies-nominations', JSON.stringify(items));
  };

  const addNewNomination = (movie) => {
    let isNominated;
    let i;
    for (i in nominations) {
      if (nominations[i].imdbID === movie.imdbID) {
        isNominated = true;
      }
    }
    if (isNominated === true) {
      alert('Movie already nominated!');
    } if (nominations.length >= 5) {
      alert('You have reached the maximum amount of nominations (5). Remove a nomination to add a new one.');
    } else {
      const newNominationList = [...nominations, movie];
      setNominations(newNominationList);
      saveToLocalStorage(newNominationList);
    }
  };

  const removeNominatedMovie = (movie) => {
    const newNominationList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
      );

      setNominations(newNominationList);
      saveToLocalStorage(newNominationList);
  }

  return (
    <div className="App">
        <head>
          <div className="background-overlay"></div>
          <div className="background-container">
            <BackgroundVideo />
          </div>
        </head>

        <body>
          <div class="main">

            <ul class="hs full">
              <MovieList
                movies={movies}
                handleNominationClick={addNewNomination}
                nominationComponent={AddNomination}
              />
            </ul>

            <div class="middle-container" style={{ backgroundColor: "transparent" }}>
              <div className="search-wrapper">
                <Searchbar
                  searchValue={searchValue}
                  setSearchValue={setSearchValue} />
              </div>
              <div className="banner-wrapper">
                <NominationsBanner
                  nomLength={nomLength}
                  setNomLength={setNomLength} />
              </div>
            </div>

            <div className="conditional-container">
              <ul class="hs full">
                <MovieList
                  movies={nominations}
                  handleNominationClick={removeNominatedMovie}
                  nominationComponent={RemoveNomination}
                />
              </ul>
            </div>

          </div>
        </body>
    </div>
  );
}

export default App;
