class AuthException extends Error {
  constructor(code, message) {
    super();
    this.message = `${code}: ${message || code}`;
  }

  toString() {
    return this.message;
  }
}
let isAuth = auth => auth ?? false;
// let isAuth = false;

let dialogBoxId = document.getElementById('dialogBox');

const checkAuth = document.querySelector('.check-auth');
checkAuth.addEventListener('click', () => {
  try {
    if (isAuth) {
      window.open('./success.html');
    } else {
      throw new AuthException(
        'FORBIDDEN',
        'You don`t have access to this page'
      );
    }
  } catch (e) {
    showDialog(e);
  }
});

function showDialog(error) {
  dialogBoxId.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
    }
  });

  document.querySelector('.message').textContent = error;
  dialogBoxId.showModal();
}

function closeDialog() {
  dialogBoxId.close();
}
