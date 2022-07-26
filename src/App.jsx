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
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  let datePlus = new Date();
  datePlus.setDate(datePlus.getDate() + 1);
  const [checkedSmoking, setCheckedSmoking] = useLocalStorage(
    'isCheckedSmoking',
    false
  );
  const [checkedPets, setCheckedPets] = useLocalStorage('isCheckedPets', false);
  const [checkedGuests, setCheckedGuests] = useLocalStorage(
    'isCheckedGuests',
    false
  );
  const [checkedWideCorridor, setCheckedWideCorridor] = useLocalStorage(
    'isCheckedCorridor',
    false
  );
  const [checkedAssistant, setCheckedAssistant] = useLocalStorage(
    'isCheckedAssistant',
    false
  );
  const [checkedBreakfast, setCheckedBreakfast] = useLocalStorage(
    'isCheckedBreakfast',
    false
  );
  const [checkedDesk, setCheckedDesk] = useLocalStorage('isCheckedDesk', false);
  const [checkedWorktable, setCheckedWorktable] = useLocalStorage(
    'isCheckedTable',
    false
  );
  const [checkedCrib, setCheckedCrib] = useLocalStorage('isCheckedCrib', false);
  const [checkedTv, setCheckedTv] = useLocalStorage('isCheckedTv', false);
  const [checkedShampoo, setCheckedShampoo] = useLocalStorage(
    'isCheckedShampoo',
    false
  );

  const [bedroomsCount, setBedroomsCount] = useLocalStorage('bedroom', 0);
  const [bedsCount, setBedsCount] = useLocalStorage('beds', 0);
  const [bathroomsCount, setBathroomsCount] = useLocalStorage('bathroom', 0);

  const [selectedPrice, setSelectedPriced] = useState([0, 200]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(datePlus);
  const [adultsCount, setAdultsCount] = useLocalStorage('adults', 0);
  const [kidsCount, setKidsCount] = useLocalStorage('kids', 0);
  const [infantsCount, setInfantsCount] = useLocalStorage('infants', 0);
  const [rooms, setRooms] = useState([]);
  const [details, setDetails] = useState([]);
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
      smoke(checkedSmoking, item.smoking) &&
      pets(checkedPets, item.pets) &&
      guests(checkedGuests, item.guests) &&
      wideCorridor(checkedWideCorridor, item.widecorridor) &&
      assistant(checkedAssistant, item.assistant) &&
      breakfast(checkedBreakfast, item.breakfast) &&
      desk(checkedDesk, item.desk) &&
      worktable(checkedWorktable, item.worktable) &&
      crib(checkedCrib, item.crib) &&
      tv(checkedTv, item.tv) &&
      shampoo(checkedShampoo, item.shampoo) &&
      bedrooms(bedroomsCount, item.bedrooms) &&
      beds(bedsCount, item.beds) &&
      bathrooms(bathroomsCount, item.bathrooms)
    );
  });

  function smoke(checkedSmoking, itemProperty) {
    return checkedSmoking ? checkedSmoking === itemProperty : true;
  }
  function pets(checkedPets, itemProperty) {
    return checkedPets ? checkedPets === itemProperty : true;
  }
  function guests(checkedGuests, itemProperty) {
    return checkedGuests ? checkedGuests === itemProperty : true;
  }
  function wideCorridor(checkedWideCorridor, itemProperty) {
    return checkedWideCorridor ? checkedWideCorridor === itemProperty : true;
  }
  function assistant(checkedAssistant, itemProperty) {
    return checkedAssistant ? checkedAssistant === itemProperty : true;
  }
  function breakfast(checkedBreakfast, itemProperty) {
    return checkedBreakfast ? checkedBreakfast === itemProperty : true;
  }
  function desk(checkedDesk, itemProperty) {
    return checkedDesk ? checkedDesk === itemProperty : true;
  }
  function worktable(checkedWorktable, itemProperty) {
    return checkedWorktable ? checkedWorktable === itemProperty : true;
  }
  function crib(checkedCrib, itemProperty) {
    return checkedCrib ? checkedCrib === itemProperty : true;
  }
  function tv(checkedTv, itemProperty) {
    return checkedTv ? checkedTv === itemProperty : true;
  }
  function shampoo(checkedShampoo, itemProperty) {
    return checkedShampoo ? checkedShampoo === itemProperty : true;
  }
  function bedrooms(bedroomsCount, itemProperty) {
    return bedroomsCount ? bedroomsCount === itemProperty : true;
  }
  function beds(bedsCount, itemProperty) {
    return bedsCount ? bedsCount === itemProperty : true;
  }
  function bathrooms(bathroomsCount, itemProperty) {
    return bathroomsCount ? bathroomsCount === itemProperty : true;
  }
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      fetch(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/rooms`)
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

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      fetch(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/details`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setDetails(json);
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
                  checkedSmoking={checkedSmoking}
                  setCheckedSmoking={setCheckedSmoking}
                  checkedPets={checkedPets}
                  setCheckedPets={setCheckedPets}
                  checkedGuests={checkedGuests}
                  setCheckedGuests={setCheckedGuests}
                  checkedWideCorridor={checkedWideCorridor}
                  setCheckedWideCorridor={setCheckedWideCorridor}
                  checkedAssistant={checkedAssistant}
                  setCheckedAssistant={setCheckedAssistant}
                  checkedBreakfast={checkedBreakfast}
                  setCheckedBreakfast={setCheckedBreakfast}
                  checkedDesk={checkedDesk}
                  setCheckedDesk={setCheckedDesk}
                  checkedWorktable={checkedWorktable}
                  setCheckedWorktable={setCheckedWorktable}
                  checkedCrib={checkedCrib}
                  setCheckedCrib={setCheckedCrib}
                  checkedTv={checkedTv}
                  setCheckedTv={setCheckedTv}
                  checkedShampoo={checkedShampoo}
                  setCheckedShampoo={setCheckedShampoo}
                  bedroomsCount={bedroomsCount}
                  setBedroomsCount={setBedroomsCount}
                  bedsCount={bedsCount}
                  setBedsCount={setBedsCount}
                  bathroomsCount={bathroomsCount}
                  setBathroomsCount={setBathroomsCount}
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
                  details={details}
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
