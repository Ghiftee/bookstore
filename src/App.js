import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <header className="d-flex panel-bg">
            <h1 className="bookstore-cms">BookStore CMS</h1>
            <Link to="/books" className="books text-decoration-none">Books</Link>
            <Link to="/categories" className="categories text-decoration-none">Categories</Link>
          </header>
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
    </div>
  );
}

export default App;
