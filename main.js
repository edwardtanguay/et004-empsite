import './style.scss';
import employees from './data/employees.json';

const getEmployeeListHtml = () => {
  let html = '';
  for (const emp of employees) {
    const elem = `<div>${emp.firstName} ${emp.lastName} - ${emp.address.country}</div>`;
    html += elem;
  }
  return html;
}

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Employees</h1>
  <p>There are ${employees.length} employees.</p>
  ${getEmployeeListHtml()}
  </div>
`;
