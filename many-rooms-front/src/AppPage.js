import React, {Component, Fragment} from 'react'; 
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
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

export default class AppPage extends Component {
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
          <Router>
            <Switch>
              <Route exact path = '/home'><HomeScreen /></Route>
              <Route exact path = '/'><HomeScreen /></Route>
              <Route exact path = '/settings'><SettingsScreen/></Route>
              <Route exact path = '/support'><SupportScreen/></Route>
              <Route exact path = '/profile/:a([0-9]+)'><ProfileScreen/></Route>
              <Route exact path = '/f/*/create'><CreateRoomScreen /></Route>
              <Route exact path = '/f/*'><FloorScreen /></Route>
              <Route exact path = '/p/*'><ChatBoxScreen/></Route>
              <Route><ErrorScreen/></Route>
            </Switch>
          </Router>
        </div>
      </Fragment>
    );
  }
}