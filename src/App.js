import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TV_channels from "./components/TV_channels"
import MainPage from "./components/MainPage";
import Movies from "./components/Movies";
import TV_series from "./components/TV_series";
import Conceris from "./components/Conceris";
import Sport from "./components/Sport";
import For_kids from "./components/For_kids";
import Favourites from "./components/Favourites";
import personal_data from "./components/personal_data";
import Default from "./components/Default";
import './App.css';
// import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div style={{background:"black"}}>
      {/* <Navbar /> */}
      <div className=" row container-fluid p-5">
        <div className="col-3 ">
          <Header />
        </div>
        <div className="col-9">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/TV_channels" component={TV_channels} />
            <Route path="/Movies" component={Movies} />
            <Route path="/TV_series" component={TV_series} />
            <Route path="/Conceris" component={Conceris} />
            <Route path="/Sport" component={Sport} />
            <Route path="/For_kids" component={For_kids} />
            <Route path="/Favourites" component={Favourites} />
            <Route path="/personal_data" component={personal_data} />
            <Route component={Default} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
