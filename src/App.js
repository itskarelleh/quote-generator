import React, { useState, useEffect, useCallback } from 'react';
import { Header, Quote, AuthorSummary, LoadingScreen, Loader } from './components';
import axios from 'axios';
import { motion } from 'framer-motion';

function App() {

  const [ random, setRandom ] = useState(false);
  const [ lights, setLights ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ quote, setQuote ] = useState([]);
  const [ error, setError ] = useState('');
  const [ didMount, setDidMount ] = useState(false);
  
  function getARandomQuote() {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';

    if(quote) {
      setQuote([]);
      setRandom(false);
    }

    axios.get(url).then((res) => {
      setQuote(res.data.data);
      setRandom(false);
      setLoading(false);
    }).catch((err) => setError(err));
  }

  useEffect(() => {
    setDidMount(true);
    return () => {
      setDidMount(false);
      getARandomQuote();
    }
  }, [didMount]);


  if(loading) {  
    return <LoadingScreen />;
  }

  if(random) {
    console.log('Random = ' + random);
    console.log('didMount ' + didMount);
    getARandomQuote();
  }

  if(!didMount) {
    console.log('didMount ' + didMount);
    return null;
  }

  const QuoteAndAuthor = () => {

    return (
        <>
          { quote && quote.map((item) => (
            <>
              <Quote text={item.quoteText} lights={lights}/>
              <AuthorSummary fullname={item.quoteAuthor} 
              genre={item.quoteGenre}
              lights={lights} />
            </>
          ))}
        </>
    )
  }

  return (
      <motion.div className={`App ${!lights ? 'light-bg' : 'dark-bg'}`}>
        <Header setLightsOn={setLights} setRandomized={setRandom} />
        <main>
          { error ? <p className={`error ${!lights ? 'error-light' : 'error-dark'}`}>{error}</p> : null }
          {/* <QuoteAndAuthor /> */}
          { random ? (<Loader message="Getting new quote" />) : <QuoteAndAuthor /> }
        </main>
      </motion.div>
  );
}

export default App;
