import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import Courses from "./components/Courses/Courses";
import Events from "./components/Events/Events";


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/courses">
          <Courses></Courses>
        </Route>
        <Route exact path="/events">
          <Events></Events>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
