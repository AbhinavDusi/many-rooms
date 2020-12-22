import React, {Component, Fragment} from 'react'; 
import Navbar from './Navbar'; 
import OptionsPanel from './OptionsPanel'; 
import ChatBox from './ChatBox'; 

export default class App extends Component {
  render() {
    const divStyle = {
      width: '100%',
      height: 'calc(100% - 60px)',
      display: 'inline-block',
      paddingTop:'60px'
    };

    return (
      <Fragment>
        <Navbar />
        <div style = {divStyle}>
          <OptionsPanel />
          <ChatBox />
        </div>
      </Fragment>
    );
  }
}