const books = [];

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export const addBook = book => {
  books.push(book);
  console.log('Book added to the catalog.');
};

export const showBooks = () => {
  console.log('Book Catalog');

  let slNo = 1;
  books.forEach(({ title, author }) => {
    console.log(`(${slNo++}) Title: ${title}, Author: ${author}`);
  });
}
