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

export default class App extends Component {
  state = {
    screenToLoad: <HomeScreen />
  }

  componentDidMount() {
    fetch(window.location.pathname)
      .then(res => res.json())
      .then(
        res => {
          const screenLoadNumber = res.screenToLoad; 
          let screenToLoad = <HomeScreen />; 
          switch (screenLoadNumber) {
            case 0:
              screenToLoad = <HomeScreen />;
              break;
            case 1:
              screenToLoad = <ProfileScreen />;
              break;
            case 2:
              screenToLoad = <SettingsScreen />;
              break;
            case 3:
              screenToLoad = <SupportScreen />;
              break;
          }
          this.setState({screenToLoad});
        }
      ); 
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