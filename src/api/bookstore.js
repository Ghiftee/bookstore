const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const initialize = async () => {
  if (!localStorage.getItem('appId')) {
    const response = await fetch(`${BASE_URL}/apps/`, {
      method: 'POST',
    });
    const appId = await response.text();
    localStorage.setItem('appId', appId);
  }
};

export const getBooks = async () => {
  const appId = localStorage.getItem('appId');
  const response = await fetch(`${BASE_URL}/apps/${appId}/books`);
  const books = await response.text();
  return books;
};

export const addNewBook = async (book) => {
  const appId = localStorage.getItem('appId');
  const response = await fetch(`${BASE_URL}/apps/${appId}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: `${book.title}&|&|&${book.author}`,
      category: book.category,
    }),
  });
  const status = await response.text();
  return status;
};

export const removeExistingBook = async (book) => {
  const appId = localStorage.getItem('appId');
  const response = await fetch(`${BASE_URL}/apps/${appId}/books/${book.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
    }),
  });
  const status = await response.text();
  return status;
};
