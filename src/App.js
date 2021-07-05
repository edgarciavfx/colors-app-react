import React, { Component } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedPalettes[4]));
    return (
      <div>
        <Palette palette={generatePalette(seedPalettes[4])} />
      </div>
    );
  }
}

export default App;
