import { Person } from './classes/Person.js';
import { saveUserData, obtainUserData, deleteUsereData } from './utils/storage.js';
import { getInteractionCount, incrementInteractionCount } from './utils/interaction.js';


window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const age = document.getElementById('age');
  const saveButton = document.getElementById('save-data');
  const deleteButton = document.getElementById('delete-data');
 
  // Initialize interaction count display
  form.addEventListener('submit', e => {
    e.preventDefault();

    const person = new Person(name.value, age.value);

    // Validate name and age
    if (person.validateName(person.name) && person.validateAge(person.age)) {
      saveUserData(person);
      alert(`User data saved: \nName - ${person.name} \nAge - ${person.age}`);
      name.value = '';
      age.value = 0;
      updateInteractionDisplay(incrementInteractionCount());
    } else {
      alert('Invalid data. Please check the name and age.');
      updateInteractionDisplay(incrementInteractionCount());
    }
  })

  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    const users = obtainUserData();
    if (users == null) {
      return;
    }
    deleteUsereData();
    alert('User data deleted successfully.');
    updateInteractionDisplay(incrementInteractionCount());
  })

  function updateInteractionDisplay(count) {
    const counter = document.getElementById('interaction-counter');
    if (counter) {
      counter.textContent = `Interacciones: ${count}`;
    }
  }
  renderUserList();
  
});

function renderUserList() {
const userList = document.getElementById('user-list');
if (!userList) return;

userList.innerHTML = '';

const users = obtainUserData();

// If no users are found, display a message
if (users === null) {
  const empty = document.createElement('li');
  empty.textContent = 'There are no users saved.';
  userList.appendChild(empty);
  return;
}

// If users are found, display them
users.forEach((user, index) => {
  const item = document.createElement('li');
  item.textContent += `${index + 1}. Name: ${user.name} - Age: ${user.age}`;
  userList.appendChild(item);
});
}