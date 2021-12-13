import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import store from "./store";
import history from "./services/history";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}
