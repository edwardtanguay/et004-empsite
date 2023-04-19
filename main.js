import './style.scss';
import employees from './data/employees.json';

const getEmployeeListHtml = () => {
	let html = '';
	for (const emp of employees) {
		const elem = `<div>${emp.firstName} ${emp.lastName} - ${emp.address.country}</div>`;
		html += elem;
	}
	return html;
};

const booksUrl = 'https://gutendex.com/books/?search=hamburg';
const response = await fetch(booksUrl);
const booksData = await response.json();

const getBooksListHtml = () => {
	let html = `BEFORE<script>alert('hack')</script>AFTER`;
	for (const book of booksData.results) {
		const elem = `<div class="book">${book.title}</div>`;
		html += elem;
	}
	return html;
};

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Employees</h1>
  <p>There are ${employees.length} employees.</p>
  ${getEmployeeListHtml()}
  <h1>Books</h1>
  <p>There are ${booksData.count} books.</p>
  ${getBooksListHtml()}
  </div>
`;
