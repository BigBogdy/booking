import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/searchpage/SearchPage';

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Main} exact></Route>
            <Route path="/search" component={SearchPage}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
