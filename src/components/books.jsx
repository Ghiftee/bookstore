import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as UUID } from 'uuid';
import { initialize } from '../api/bookstore';
import {
  allBooks, addBookToStore, removeBookFromStore, fetchBooks,
} from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector(allBooks);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(async () => {
    await initialize();
    dispatch(fetchBooks);
  }, [initialize]);

  const setBookTitle = (e) => {
    setTitle(e.target.value);
  };

  const setBookAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const submitToBookStore = () => {
    const newBook = {
      id: UUID(),
      title,
      author,
      category: '',
    };
    dispatch(addBookToStore(newBook));
  };

  const deleteBookFromStore = (e) => {
    dispatch(removeBookFromStore({ id: e.target.id }));
  };

  return (
    <div>
      <div>
        <ul>
          { books.map((book) => (
            <li key={book.id}>
              <span className="mr-10">{book.title}</span>
              <button id={book.id} type="button" onClick={deleteBookFromStore}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="new-book">ADD NEW BOOK</h4>
        <form className="d-flex">
          <input className="book-title" placeholder="Book Title" onChange={setBookTitle} />
          <br />
          <br />
          <input className="category-title" placeholder="Category" onChange={setBookAuthor} />
          <br />
          <br />
          <button className="add-book-button" type="submit" onClick={submitToBookStore}><span>ADD BOOK</span></button>
        </form>
      </div>
    </div>
  );
}
