import React from 'react';

import Header from './assets/header.png';
import Footer from './assets/footer.png';
import Equipment from './assets/equiptment.png';
import Travel from './assets/Travel.png';
import Lodging from './assets/lodging.png';
import frogFish from './assets/frogFish.png';
import octaLizard from './assets/octalizard.png';
import seaCat from './assets/seaCat.png';
import Man from './assets/man.png';
import Girl from './assets/girl.png';
import Waders from './assets/waders.png';

import './App.css';

import Services from './Services';

function App() {
  return (
    <div className="App">
      <img src={Header} className='header'/>
      <div style={{margin: '5%'}}>
        <label className='title'>SERVICES PROVIDED</label>
        <section className='section'>
        <Services image={Travel} title='Travel' description='Rest at ease, our booking agency provides all the stages of travel to get you from your home to anywhere in the world, all included in our trip packages.'/>
        <Services image={Lodging} title='Lodging' description="During your trip, whether its a week, month, or 6-month trip; you can be sure you\'ll have a place to rest your head every night.  We provide comfortable heated cabins at most bases and tents for out in the field."/>
        <Services image={Equipment} title='Equipment' description='Equipment is also provided, including camping gear, fishing gear, and of course food.  With that said, if you have a lucky rod, feel free to bring it along.'/>
        </section>
        <label className='title'>EXPERT GUIDES</label>
        <section className='section'>
        <Services image={Girl} title='Amanda' description='Amanda leads many of our rough terrain excursions through mountains, rainforest, and deep jungles.  Nothing is going to stop her from finding that untouched and unfished part of the world.'/>
        <Services image={Waders} title='Carl' description='Carl is the fly fishing guide, hes toned his shills over the decades.   Hes an expert scouting the rivers and pulling in monster fish.'/>
        <Services image={Man} title='Hank' description='Hank is an all around great fisherman and guide for all levels.  Hes caught everything from sharks, massive tuna, to good old lake bass.  With hank, youll be sure to have a terrific  time!'/>
        </section>
        <label className='title'>REMARKABLE CATCHES</label>
        <section className='section'>
        <Services image={frogFish} title='Red-Eyed Frog Fish' description='Found this full grown red eyed frog fish in the rivers of Costa Rica.  Remarkable colors of land and water coming together.'/>
        <Services image={octaLizard} title='Octalizard' description='The octalizard is very deadly to the reefs of eastern australia.  This guy roams around devouring its prey.'/>
        <Services image={seaCat} title='Sea Cat' description='The legends of the Sea Cat are true, weve seen a few in our travels, but this was the first we caught on camera.'/>
        </section>
      </div>
      <div className='footer'>
          <img src={Footer} className='footer'/>
      </div>
    </div>
  );
}

export default App;
