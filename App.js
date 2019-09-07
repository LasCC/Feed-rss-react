import React from 'react';
import './App.css';
import './Semantic-UI/semantic.min.css'
import MacOS from './components/MacOS.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Windows from './components/Windows.jsx'
import Formation from './components/Formation.jsx'
import News from './components/News.jsx'
import Series from './components/Series.jsx'
import Films from './components/Films.jsx'
import Ebook from './components/Ebooks';


function App() {
  return (
    <Router>
      <h2 className="ui center aligned icon header darkmode-ignore">
        <i className="circular rss icon animated bounceIn"></i>
        <span className="focus-in-contract-bck">RSS Feeder - Created with React </span>
      </h2>
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path='/' component={MacOS} />
          <Route path='/windows' component={Windows} />
          <Route path='/formation' component={Formation} />
          <Route path='/news' component={News} />
          <Route path='/series' component={Series} />
          <Route path='/films' component={Films} />
          <Route path='/ebook' component={Ebook} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;


