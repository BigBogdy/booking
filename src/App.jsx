import React, { useState, useEffect } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import Main from './components/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/searchpage';
import RoomDetails from './components/room-details';
import Register from './auth/Register';
import Login from './auth/Login';
import { AuthContextProvider } from './context/AuthContext';
import Empty from './common/Empty';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Documentation from './components/Documentation';
import Vacancies from './components/Vacancies';
import News from './components/News';
import Success from './components/Success';

function App() {
  let datePlus = new Date();
  datePlus.setDate(datePlus.getDate() + 1);
  const [checked, setChecked] = useState(false);
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
    return (
      item.price >= selectedPrice[0] &&
      item.price <= selectedPrice[1] &&
      item.smoking === checked
    );
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
        <AuthContextProvider>
          <Router>
            <Header />
            <Switch>
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/vacancies">
                <Vacancies />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/documentation">
                <Documentation />
              </Route>
              <Route exact path="/">
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
              <Route exact path="/search">
                <SearchPage
                  checked={checked}
                  setChecked={setChecked}
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
              <Route exact path="/details/:id">
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
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/success">
                <Success />
              </Route>
              <Route exact path="*">
                <Empty />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
