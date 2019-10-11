import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodosList from './views/TodosList';
import EditTodo from './views/EditTodo';
import CreateTodo from './views/CreateTodo';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <br />
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
