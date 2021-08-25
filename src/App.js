import React from "react";
import TopMenu from './Component/TopMenu'
import Product from "./Component/Products/Products";
import AddProducts from "./Component/Products/AddProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
export default function App() {
  return (
    <Router>
      <div>
        <TopMenu/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
