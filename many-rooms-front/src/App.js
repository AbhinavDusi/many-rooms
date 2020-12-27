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
import ErrorScreen from './Screens/ErrorScreen';
import {floorList} from './FloorListInfo'; 

export default class App extends Component {
  state = {
    screenToLoad: <HomeScreen />
  }

  componentDidMount() {
    let screenToLoad = <ErrorScreen />;
    const split = window.location.pathname.split('/'); 
    switch(split[1]) {
      case '':
        screenToLoad = <HomeScreen />
        break;
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
      case 'p':
        screenToLoad = <ChatBoxScreen />;
        break;
      case 'f':
        if (split.length === 4) {
          if (split[3] === 'create') {
            screenToLoad = <CreateRoomScreen />
          }
        } else {
          const floor = floorList.filter(floor => floor.url === split[2]);
          if (floor.length === 1) {
            screenToLoad = <FloorScreen floor = {floor[0].name} floorURL = {'/f/' + floor[0].url}/>
          }
        }
        break;
      default:
        screenToLoad = <ErrorScreen />;
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