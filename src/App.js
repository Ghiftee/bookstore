import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <h1>BookStore CMS</h1>
      <Router>
        <Link to="/books" className="mr-10">Books</Link>
        <Link to="/categories">Categories</Link>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Redirect from="/" to="/books" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
