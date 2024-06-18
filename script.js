document.addEventListener('click', function() {
    fetchRandomUser();
});

function fetchRandomUser() {
    let url = "https://jsonplaceholder.typicode.com/users/";
    let randomNum = Math.floor(Math.random() * 10) + 1; 
    fetch(url + randomNum)
        .then((response) => response.json())
        .then((user) => displayUserData(user))
        .catch((error) => console.error('Error fetching data:', error));
}

function displayUserData(user) {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
    `;
}
