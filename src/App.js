import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import { fetchHolidays } from "./store/actions/holidays";

import HomePage from "./pages/homepage/homepage.component";

class App extends Component {
  componentDidMount() {
    const { initHolidays } = this.props;
    initHolidays();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initHolidays: () => dispatch(fetchHolidays("2020-06-02", "2020-06-27")),
});

export default connect(null, mapDispatchToProps)(App);
