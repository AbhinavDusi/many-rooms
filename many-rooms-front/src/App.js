import React, {Component, Fragment} from 'react'; 
import Navbar from './Navbar'; 
import OptionsPanel from './OptionsPanel'; 
import ChatBoxScreen from './Screens/ChatBoxScreen'; 
import CreateRoomScreen from './Screens/CreateRoomScreen';
import FloorScreen from './Screens/FloorScreen'; 
import HomeScreen from './Screens/HomeScreen'; 
import ProfileScreen from './Screens/ProfileScreen'; 
import SettingsScreen from './Screens/SettingsScreen';
import SupportScreen from './Screens/SupportScreen';
import {floorList} from './FloorListInfo';

export default class App extends Component {
  state = {
    screenToLoad: <HomeScreen />
  }

  handleSelection = selection => {
    console.log('Selection handled'); 
    let chosenFloor = this.state.chosenFloor; 
    chosenFloor = selection;
    this.setState({chosenFloor});
  }

  componentDidMount() {
    let screenToLoad;
    const split = window.location.pathname.split('/'); 
    switch(split[1]) {
      case 'home':
        screenToLoad = <HomeScreen />;
        break;
      case 'profile':
        screenToLoad = <ProfileScreen />;
        break;
      case 'settings':
        screenToLoad = <SettingsScreen />;
        break;
      case 'support':
        screenToLoad = <SupportScreen />;
        break;
      case 'f':
        screenToLoad = <FloorScreen floor = {floorList.filter(floor => 
          floor.url === split[2])[0].name
        }/>
        break;
      default:
        screenToLoad = <HomeScreen />;
        this.handleSelection(null); 
        break;
    }
    this.setState({screenToLoad});
  }

  render() {
    const divStyle = {
      width: '100%',
      height: 'calc(100% - 60px)',
      display: 'inline-block',
      paddingTop: '60px'
    };

    return (
      <Fragment>
        <Navbar />
        <div style = {divStyle}>
          <OptionsPanel />
          {this.state.screenToLoad}
        </div>
      </Fragment>
    );
  }
}