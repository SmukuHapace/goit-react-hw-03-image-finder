import { Component } from 'react';
import './Searchbar.css';

export class Searchbar extends Component {
  render() {
    return (
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label"></span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
