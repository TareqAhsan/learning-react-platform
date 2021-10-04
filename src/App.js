import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Header/Footer/Footer";
import AllPackage from "./Components/Allpackage/AllPackage";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/Services/AboutUs/AboutUs";
import Prices from "./Components/Prices/Prices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound"

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
       <AllPackage/>
       <Services/>
       <AboutUs></AboutUs>
       <Prices/>
       <Footer></Footer> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route  path="/prices">
            <Prices></Prices>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
