import './style.scss';
import employees from './data/employees.json';

const getEmployeeListHtml = () => {
  return '<p>nnn</p>';
}

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Employees</h1>
  <p>There are ${employees.length} employees.</p>
  ${getEmployeeListHtml()}
  </div>
`;
