import React, { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'; 
import { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from "tsparticles"
import HomeBackground from './components/HomeBackground';

const theme = extendBaseTheme({
  
})

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <HomeBackground/>
    </ChakraProvider>
  );
}

export default App;
