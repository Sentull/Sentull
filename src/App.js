import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CrudExampleView from './CrudExampleView';
import Newform from './Newform.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:'data'
    }
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/coba">Coba disini</Route>
          <Route path="/crud"><CrudExampleView/></Route>
          <Route path="/newform"><Newform/></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
