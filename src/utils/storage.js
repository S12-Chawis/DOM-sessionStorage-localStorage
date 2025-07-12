export function saveUserData(person) {
    // Retrieve existing users or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({
        name: person.name,
        age: parseInt(person.age)
    });
    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users))
}

export function obtainUserData() {
    // Retrieve the users from localStorage
    const userData = localStorage.getItem('users');
    return userData ? JSON.parse(userData) : null;
}

export function deleteUsereData() {
    localStorage.removeItem('users');
}