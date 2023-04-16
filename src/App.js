import React, { useState, useEffect } from 'react';
import useLocalStorage from 'react-hook-uselocalstorage';
import { Header, Quote, LoadingScreen, Loader, Footer } from './components';
import axios from 'axios';
import { motion } from 'framer-motion';

function App() {
  
  var url = ' https://quote-garden.onrender.com/api/v3/quotes/random';

  const [ random, setRandom ] = useState(false);
  const [ lights, setLights ] = useLocalStorage('on', 'off');
  const [ loading, setLoading ] = useState(true);
  const [ quote, setQuote ] = useState(null); 
  const [ error, setError ] = useState(null);

  function handleRandom() {
    window.location.reload();
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      var quoteRes = res.data.data[0];
      setQuote(quoteRes);
    }).catch((err) => setError(err));

    return () => { 
      setLoading(false);
      setRandom(false);
    }
  }, [url]);

    if(random) {
      setQuote(null);
      handleRandom();
    }

    if(loading && !quote){
      return [
      (<LoadingScreen />),
      setLoading(false)]
    }
    
    return (
      <motion.div className={`App ${lights === 'on' ? 'light-bg' : 'dark-bg'}`}>
        <Header lights={lights} setLightsOn={setLights} />
        <main>
          { quote ? (
            <>
              {error && <p>{error}</p>}
              <Quote text={quote.quoteText} setRandom={setRandom} 
              author={quote.quoteAuthor} genre={quote.quoteGenre} lights={lights} />
            </>
            ) : (<Loader message="Randomizing" lights={lights} />) }
        </main>
        <Footer lights={lights} />
      </motion.div>
    );
}

export default App;
