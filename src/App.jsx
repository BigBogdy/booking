import React, { useState, useEffect } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import Main from './components/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/searchpage';
import RoomDetails from './components/room-details';
import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  let datePlus = new Date();
  datePlus.setDate(datePlus.getDate() + 1);
  const [selectedPrice, setSelectedPriced] = useState([0, 200]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(datePlus);
  const [adultsCount, setAdultsCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const setStart = (date) => {
    setStartDate(date);
  };
  const setEnd = (date) => {
    setEndDate(date);
  };

  const arr = [adultsCount, kidsCount, infantsCount];
  const numberOfGuests = arr.reduce((a, b) => a + b, 0);

  const handleSliderChange = (event, newValue) => {
    setSelectedPriced(newValue);
  };

  const updatedRooms = rooms.filter((item) => {
    return item.price >= selectedPrice[0] && item.price <= selectedPrice[1];
  });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      fetch('https://6284b002a48bd3c40b73d00d.mockapi.io/rooms')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setRooms(json);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);

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
                numberOfGuests={numberOfGuests}
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
                rooms={rooms}
                updatedRooms={updatedRooms}
                isLoading={isLoading}
                selectedPrice={selectedPrice}
                handleSliderChange={handleSliderChange}
              />
            </Route>
            <Route path="/details/:id" exact>
              <RoomDetails
                setStart={setStart}
                setEnd={setEnd}
                startDate={startDate}
                endDate={endDate}
                adultsCount={adultsCount}
                setAdultsCount={setAdultsCount}
                setKidsCount={setKidsCount}
                setInfantsCount={setInfantsCount}
                kidsCount={kidsCount}
                infantsCount={infantsCount}
                rooms={rooms}
                numberOfGuests={numberOfGuests}
              />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
