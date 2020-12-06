import './App.css';
import { Header, Quote } from './components';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function App() {

  // const [ theme, setTheme ] = useState({})
  const [ random, setRandom ] = useState({});
  const [ error, setError ] = useState(null);
  const [ lights, setLights ] = useState(false);
  const [ text, setText ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [ genre, setGenre ] = useState('');

  function getRandomQuote() {
      
      
  }

  useEffect(() => {
    axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
      .then((res) => {
        setText(res.data.quote.quoteText);
        setAuthor(res.data.quote.quoteAuthor);
        setGenre(res.data.quote.quoteGenre);
      }).catch((err) => setError(err));
  }, []);

  return (
    <>
      <Header setLightsOn={setLights} />
      <main>
        { error ? <p>{error}</p> : null }
        {/* <h1>{random.quote.quoteText}</h1> */}
        <Quote text={text} author={author} genre={genre} />
      </main>
    </>
  );
}

export default App;
