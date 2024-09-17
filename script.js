document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.signin').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').classList.add('hidden');
    document.querySelector('.signin').classList.remove('hidden');
});

document.querySelector('#register-form input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    // Here you would normally handle the registration process (e.g., validate input, send data to a server)

    // For the purposes of this example, assume registration is successful:
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('menu-section').classList.remove('hidden');
});
