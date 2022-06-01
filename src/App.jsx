import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/searchpage';
import RoomDetails from './components/room-details';

function App() {
  // const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adultsCount, setAdultsCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);

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
                adultsCount={adultsCount}
                setAdultsCount={setAdultsCount}
                setKidsCount={setKidsCount}
                setInfantsCount={setInfantsCount}
                kidsCount={kidsCount}
                infantsCount={infantsCount}
              />
            </Route>
            <Route path="/search">
              <SearchPage
                startDate={startDate}
                setStart={setStart}
                endDate={endDate}
                setEnd={setEnd}
                adultsCount={adultsCount}
                setAdultsCount={setAdultsCount}
                setKidsCount={setKidsCount}
                setInfantsCount={setInfantsCount}
                kidsCount={kidsCount}
                infantsCount={infantsCount}
              />
            </Route>
            <Route path="/details/:id">
              <RoomDetails />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
