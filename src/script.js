const contacts = [];

function updateStats() {
  const total = contacts.length;
  document.getElementById('total-contacts').textContent = total;
}

function renderTable() {
  const tbody = document.querySelector('#contact-table tbody');
  tbody.innerHTML = '';
  contacts.forEach(c => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = c.name;
    const emailCell = document.createElement('td');
    emailCell.textContent = c.email;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    tbody.appendChild(row);
  });
}

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  contacts.push({name, email});
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  updateStats();
  renderTable();
});

// initialize
updateStats();
renderTable();
