import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/About';
import Landing from './components/Pages/Landing';
import admin from './components/Pages/admin';
import AdminWrapper from './components/AdminWrapper';
import Login from './components/Pages/Login';


export default function App() {
  {
    return (
      // <Router>
      //   <main>
      //     <nav>
      //       <ul>
      //         <div className="App">
      //           <li><a href="/about">About</a></li>

      //         </div>
      //       </ul>
      //     </nav>
      //     <Route path="/" render={() => <h1>Welcome to</h1>} />
      //   </main>
      // </Router >
      <Router>
        {/* Route 1 */}
        <Route path="/admin"
          render={props => (
            <pageWrapper>
              <Login {...props} />
            </pageWrapper>
          )}
        />

        {/* Main Route */}
        <Route path="/Home"
          render={props => (
            <pageWrapper>
              <Landing {...props} />
            </pageWrapper>
          )}
        />
        <Route path="/"
          render={props => (
            <pageWrapper>
              <Landing {...props} />
            </pageWrapper>
          )}
        />

        {/* Route 2  */}
        <Route path="/About"
          render={props => (
            <pageWrapper>
              <About {...props} />
            </pageWrapper>
          )}
        />

      </Router>

    );
  }
}