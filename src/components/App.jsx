import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  render() {
    return (
      <section>
        <Searchbar />
        <ImageGallery />
      </section>
    );
  }
}
