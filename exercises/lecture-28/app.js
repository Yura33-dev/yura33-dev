const registrationForm = document.querySelector('#registrationForm');
const errorMessages = document.querySelector('#errorMessages');

registrationForm.addEventListener('submit', e => {
  e.preventDefault();

  const { username, email, password } = registrationForm.elements;
  const errors = {};

  function isUsernameValid(userName) {
    return userName.trim() !== '' && userName.length >= 2;
  }

  function isEmailValid(userEmail) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  function isPasswordValid(userPassword) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
      userPassword
    );
  }

  errorMessages.innerHTML = '';

  if (!isUsernameValid(username.value)) {
    errors['username'] = 'Name should have 2 character at least';
  }

  if (!isEmailValid(email.value)) {
    errors['email'] = 'Email should be a valid';
  }

  if (!isPasswordValid(password.value)) {
    errors['password'] =
      'Password should consist 1 capital character, 1 usual character, 1 digit, 1 special character at least';
  }

  if (Object.keys(errors).length > 0) {
    for (let key in errors) {
      if (errors[key]) {
        const p = document.createElement('p');
        p.textContent = errors[key];
        errorMessages.appendChild(p);
      }
    }
    return;
  } else {
    console.log('Register is success!');
    username.value = '';
    email.value = '';
    password.value = '';
    errorMessages.innerHTML = '';
  }
});
