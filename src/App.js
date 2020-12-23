import React, {Component, Fragment} from 'react'; 
import Navbar from './Navbar'; 
import OptionsPanel from './OptionsPanel'; 
import AboutScreen from './Screens/AboutScreen'; 
import ChatBoxScreen from './Screens/ChatBoxScreen'; 
import FloorScreen from './Screens/FloorScreen'; 
import HomeScreen from './Screens/HomeScreen'; 
import ProfileScreen from './Screens/ProfileScreen'; 
import SettingsScreen from './Screens/SettingsScreen'; 

export default class App extends Component {
  getScreen = () => {
    return <ChatBoxScreen />
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
          {this.getScreen}
        </div>
      </Fragment>
    );
  }
}