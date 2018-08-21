import React from 'react';
import {
  asset,
  Pano,
  View,
  Scene,
  AmbientLight,
  DirectionalLight
} from 'react-vr';
import characters from '../data/characters';
import MyHeader from './myHeader';
import Planet from './planet';
import Menu from './menu';
import Info from './info';
import Asteroids from './nativeModules/asteroids';

export default class SolarSystem extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPlanet: 'PilotDroid'
    };
  }

  switchPlanet = (planet) => {
    this.setState({currentPlanet: planet});
  };

  render() {
    const {
      currentPlanet
    } = this.state;

    return (
      <View>
        <Scene style={{ transform: [ {translate: [0,0,600]} ] }}/>

        <Pano source={asset('background.jpg')}/>

        <AmbientLight intensity={1}/>
        <DirectionalLight intensity={0.5}/>

        <MyHeader currentPlanet={currentPlanet} />

        <Planet currentPlanet={currentPlanet}/>

        <Menu
          characters={characters}
          switchPlanet={this.switchPlanet}
          currentPlanet={currentPlanet} />

        <Info currentPlanet={currentPlanet} />

        <Asteroids />

      </View>
    );
  }
};