import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/searchpage/SearchPage';

function App() {
  // const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const setRange = (date) => {
    setStart();
    setEnd();
  };

  const setStart = (date) => {
    setStartDate(date);
  };
  const setEnd = (date) => {
    setEndDate(date);
  };

  return (
    <>
      <div className="wrapper">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Main
                startDate={startDate}
                setStart={setStart}
                endDate={endDate}
                setEnd={setEnd}
              />
            </Route>
            <Route path="/search">
              <SearchPage
                startDate={startDate}
                setStart={setStart}
                endDate={endDate}
                setEnd={setEnd}
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
