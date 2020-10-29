import { Book, addBook, showBooks } from './books';
import { Member, addMember, showMembers } from './members';

let book = new Book('b1', 'a1');
addBook(book);

book = new Book('b2', 'a2');
addBook(book);

showBooks();

let member = new Member('ram', 'ram@abc.com');
addMember(member);

member = new Member('hari', 'hari@abc.com');
addMember(member);

showMembers();
