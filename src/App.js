import React from 'react';
import Jumbotron from './components/jumbotron'
import jumboData from './fixtures/jumbo.json';

function App() {
  return (
    <Jumbotron.Container>    {/* encapsule all the 3 jumbotrons from jumbo.json */}
    
      {jumboData.map((item) => (            // for each item that comes down from the map, we can iterate 
        <Jumbotron key={item.id}                 // need to pass key to iteration element
        direction = {item.direction}>
            <p> Hello </p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
