
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import CategoriesPage from './components/CategoriesPage';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/:id" component={ProjectPage} />
        <Route path="/categories/:category" component={CategoriesPage} />
      </Routes>
    </Router>
  );
}

export default App;

