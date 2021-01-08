import React, {Component} from 'react'; 
import AppPage from './AppPage';
import AuthenticationPage from './AuthenticationPage';
import { getUserID } from './UserInfo'; 

export default class App extends Component {
  render() {
    document.cookie = "username=";
    return getUserID() === '' ? <AuthenticationPage /> : <AppPage />;
  }
}