import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./hcc/Login";
import Hello from "./hcc/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Hello} />
          <Route path="/medical_institution_management" component={Login} />
          <Route path="/project_agreement_management" component={Login} />
          <Route path="/cooperation_project_agreement" component={Login} />
          <Route path="/monthly_report" component={Login} />
          <Route path="/statistical_analysis" component={Login} />
          <Route path="/system_management" component={Login} />
          <Route path="/organization" component={Login} />
          <Route path="/role_permissions" component={Login} />
          <Route path="/user_management" component={Login} />
          <Route path="/data_dictionary" component={Login} />
          <Route path="/operation_log" component={Login} />
          <Route path="/change_Password" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
