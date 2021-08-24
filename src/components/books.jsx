import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as UUID } from 'uuid';
import { allBooks, addBookToStore, removeBookFromStore } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector(allBooks);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

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
      <h3>All Books</h3>
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
      <form>
        <h4>Add New Book</h4>
        <input placeholder="Title" onChange={setBookTitle} />
        <br />
        <br />
        <input placeholder="Author" onChange={setBookAuthor} />
        <br />
        <br />
        <button type="button" onClick={submitToBookStore}>Add Book</button>
      </form>
    </div>
  );
}
