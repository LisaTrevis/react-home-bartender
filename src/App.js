import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Welcome from "./pages/Welcome";
import DrinkName from "./pages/DrinkName";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="welcome-page">
              <Navbar />
              <Welcome />
            </div>
          </Route>
          <Route path="/drinkname">
            <div className="drinkname-page">
              <Navbar />
              <DrinkName />
            </div>
          </Route>
          <Route path="/cocktail/:id">
            <div className="cocktail-section">
              <Navbar />
              <SingleCocktail />
            </div>
          </Route>
          <Route path="*">
            <Navbar />
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
