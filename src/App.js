import React, { Component } from 'react';
import './App.scss';
import ImageContent from './components/ImageContent';
import HeadContent from './components/HeadContent';
import Image from './assets/avatar.jpg';
import IntroContent from './components/IntroContent';
import CvContent from './components/CvContent';

class App extends Component {
  state = {
    imgurl: Image,
    name: 'Kamil 24yo',
    introduceTitle: 'ABOUT ME',
    introduceContent:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, ' +
      'cumque distinctio magni quam expedita velit laborum sunt amet facere' +
      'tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.',
    contentTitle: 'EDUCATION',
    cvContent: [
      {
        year: 1990,
        intro: 'I was born in Katowice',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, ' +
          'dolores iste dolore est aut modi.',
      },
      {
        year: 2005,
        intro: 'Secondary school specializing in artistic',
        content:
          'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis ' +
          'voluptatibus.',
      },
      {
        year: 2009,
        intro: 'First level graduation in Graphic Design',
        content:
          'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam ' +
          'perferendis? lusto, quibusdam asperiores underepel lat.',
      },
      {
        year: 2012,
        intro: 'Second level graduation in Graphic Design',
        content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
      },
    ],
  };

  render() {
    return (
      <main className="app">
        <ImageContent imgurl={this.state.imgurl} />
        <HeadContent name={this.state.name} />
        <hr />
        <section className="content">
          <IntroContent
            title={this.state.introduceTitle}
            content={this.state.introduceContent}
          />
          <CvContent
            contentTitle={this.state.contentTitle}
            cvcContent={this.state.cvContent}
          />
        </section>
      </main>
    );
  }
}

export default App;
