import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map((palette) => (
          <p>
            <MiniPalette {...palette}/>
          </p>
        ))}
      </div>
    );
  }
}