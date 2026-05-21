import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
      </main>
    );
  }
}

export default App;